/*
  # Fix RLS policies on appointments table

  1. Security Changes
    - Drop overly permissive "Anyone can create appointments" INSERT policy (WITH CHECK was always true)
    - Drop "Public read access to appointments" SELECT policy (anonymous users should not read all appointments)
    - Add restrictive INSERT policy that only allows anon users to insert rows with status = 'pending'
      This prevents malicious actors from inserting appointments with arbitrary status values

  2. Notes
    - Appointments are submitted via a public form by anonymous visitors
    - The new INSERT policy enforces that new appointments always have 'pending' status
    - Public SELECT access is removed entirely; only authenticated (admin) users should read appointments
*/

DROP POLICY IF EXISTS "Anyone can create appointments" ON public.appointments;
DROP POLICY IF EXISTS "Public read access to appointments" ON public.appointments;

CREATE POLICY "Anon can insert pending appointments"
  ON public.appointments
  FOR INSERT
  TO anon
  WITH CHECK (status = 'pending');

CREATE POLICY "Authenticated users can read appointments"
  ON public.appointments
  FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);

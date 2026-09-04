/*
  # Fix RLS policy on contact_submissions table

  1. Security Changes
    - Drop overly permissive "Anyone can submit contact form" INSERT policy (WITH CHECK was always true)
    - Add restrictive INSERT policy that only allows inserting rows with status = 'new'
      This prevents malicious actors from inserting submissions with arbitrary status values

  2. Notes
    - Contact form is submitted by anonymous website visitors
    - The new INSERT policy enforces that new submissions always have 'new' status
    - Only authenticated (admin) users should be able to read submissions
*/

DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_submissions;

CREATE POLICY "Anon can insert new contact submissions"
  ON public.contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (status = 'new');

CREATE POLICY "Authenticated users can read contact submissions"
  ON public.contact_submissions
  FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);

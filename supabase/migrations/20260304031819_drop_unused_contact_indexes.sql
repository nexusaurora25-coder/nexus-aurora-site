/*
  # Drop unused indexes on contact_submissions

  1. Changes
    - Drop `idx_contact_email` index (unused)
    - Drop `idx_contact_status` index (unused)
    - Drop `idx_contact_created` index (unused)

  2. Notes
    - These indexes have never been used and add unnecessary write overhead
    - They can be re-added later if query patterns require them
*/

DROP INDEX IF EXISTS idx_contact_email;
DROP INDEX IF EXISTS idx_contact_status;
DROP INDEX IF EXISTS idx_contact_created;

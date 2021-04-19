--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'md5c90b8a9f73d3a247ac38b008c11185d0';
CREATE ROLE ynot;
ALTER ROLE ynot WITH NOSUPERUSER NOINHERIT NOCREATEROLE NOCREATEDB LOGIN NOREPLICATION NOBYPASSRLS PASSWORD 'md53e09ad8b1475e65868ee1d60bcccd59d';

GRANT SELECT ON TABLE ynot.application TO ynot;
GRANT SELECT ON TABLE ynot.certificate TO ynot;
GRANT SELECT ON TABLE ynot.company TO ynot;
GRANT SELECT ON TABLE ynot.educational_instittution TO ynot;
GRANT SELECT ON TABLE ynot.matched_with TO ynot;
GRANT SELECT ON TABLE ynot.message TO ynot;
GRANT SELECT ON TABLE ynot.programming_language TO ynot;
GRANT SELECT ON TABLE ynot.project TO ynot;
GRANT SELECT ON TABLE ynot.repository TO ynot;
GRANT SELECT ON TABLE ynot.scientific_work TO ynot;
GRANT SELECT ON TABLE ynot.social_media TO ynot;
GRANT SELECT ON TABLE ynot.swiped_by TO ynot;
GRANT SELECT ON TABLE ynot.user TO ynot;
GRANT SELECT ON TABLE ynot.user_project TO ynot;

GRANT INSERT ON TABLE ynot.application TO ynot;
GRANT INSERT ON TABLE ynot.certificate TO ynot;
GRANT INSERT ON TABLE ynot.company TO ynot;
GRANT INSERT ON TABLE ynot.educational_instittution TO ynot;
GRANT INSERT ON TABLE ynot.matched_with TO ynot;
GRANT INSERT ON TABLE ynot.message TO ynot;
GRANT INSERT ON TABLE ynot.programming_language TO ynot;
GRANT INSERT ON TABLE ynot.project TO ynot;
GRANT INSERT ON TABLE ynot.repository TO ynot;
GRANT INSERT ON TABLE ynot.scientific_work TO ynot;
GRANT INSERT ON TABLE ynot.social_media TO ynot;
GRANT INSERT ON TABLE ynot.swiped_by TO ynot;
GRANT INSERT ON TABLE ynot.user TO ynot;
GRANT INSERT ON TABLE ynot.user_project TO ynot;

GRANT UPDATE ON TABLE ynot.application TO ynot;
GRANT UPDATE ON TABLE ynot.certificate TO ynot;
GRANT UPDATE ON TABLE ynot.company TO ynot;
GRANT UPDATE ON TABLE ynot.educational_instittution TO ynot;
GRANT UPDATE ON TABLE ynot.matched_with TO ynot;
GRANT UPDATE ON TABLE ynot.message TO ynot;
GRANT UPDATE ON TABLE ynot.programming_language TO ynot;
GRANT UPDATE ON TABLE ynot.project TO ynot;
GRANT UPDATE ON TABLE ynot.repository TO ynot;
GRANT UPDATE ON TABLE ynot.scientific_work TO ynot;
GRANT UPDATE ON TABLE ynot.social_media TO ynot;
GRANT UPDATE ON TABLE ynot.swiped_by TO ynot;
GRANT UPDATE ON TABLE ynot.user TO ynot;
GRANT UPDATE ON TABLE ynot.user_project TO ynot;

GRANT DELETE ON TABLE ynot.application TO ynot;
GRANT DELETE ON TABLE ynot.certificate TO ynot;
GRANT DELETE ON TABLE ynot.company TO ynot;
GRANT DELETE ON TABLE ynot.educational_instittution TO ynot;
GRANT DELETE ON TABLE ynot.matched_with TO ynot;
GRANT DELETE ON TABLE ynot.message TO ynot;
GRANT DELETE ON TABLE ynot.programming_language TO ynot;
GRANT DELETE ON TABLE ynot.project TO ynot;
GRANT DELETE ON TABLE ynot.repository TO ynot;
GRANT DELETE ON TABLE ynot.scientific_work TO ynot;
GRANT DELETE ON TABLE ynot.social_media TO ynot;
GRANT DELETE ON TABLE ynot.swiped_by TO ynot;
GRANT DELETE ON TABLE ynot.user TO ynot;
GRANT DELETE ON TABLE ynot.user_project TO ynot;
--
-- PostgreSQL database cluster dump complete
--


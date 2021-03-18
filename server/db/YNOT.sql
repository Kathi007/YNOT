--
-- PostgreSQL database dump
--

-- Dumped from database version 12.6 (Ubuntu 12.6-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.6 (Ubuntu 12.6-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: ynot; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA ynot;


ALTER SCHEMA ynot OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: application; Type: TABLE; Schema: ynot; Owner: postgres
--

CREATE TABLE ynot.application (
    a_applicationid integer NOT NULL,
    a_titlt character varying(128) NOT NULL,
    a_content text NOT NULL,
    u_userid integer NOT NULL,
    p_projectid integer NOT NULL
);


ALTER TABLE ynot.application OWNER TO postgres;

--
-- Name: application_a_applicationid_seq; Type: SEQUENCE; Schema: ynot; Owner: postgres
--

CREATE SEQUENCE ynot.application_a_applicationid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE ynot.application_a_applicationid_seq OWNER TO postgres;

--
-- Name: application_a_applicationid_seq; Type: SEQUENCE OWNED BY; Schema: ynot; Owner: postgres
--

ALTER SEQUENCE ynot.application_a_applicationid_seq OWNED BY ynot.application.a_applicationid;


--
-- Name: certificate; Type: TABLE; Schema: ynot; Owner: postgres
--

CREATE TABLE ynot.certificate (
    ce_certid integer NOT NULL,
    ce_title character varying(128) NOT NULL,
    ce_document text NOT NULL,
    u_userid integer NOT NULL
);


ALTER TABLE ynot.certificate OWNER TO postgres;

--
-- Name: certificate_ce_certid_seq; Type: SEQUENCE; Schema: ynot; Owner: postgres
--

CREATE SEQUENCE ynot.certificate_ce_certid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE ynot.certificate_ce_certid_seq OWNER TO postgres;

--
-- Name: certificate_ce_certid_seq; Type: SEQUENCE OWNED BY; Schema: ynot; Owner: postgres
--

ALTER SEQUENCE ynot.certificate_ce_certid_seq OWNED BY ynot.certificate.ce_certid;


--
-- Name: company; Type: TABLE; Schema: ynot; Owner: postgres
--

CREATE TABLE ynot.company (
    co_companyid integer NOT NULL,
    co_name character varying(64) NOT NULL,
    co_startdate date NOT NULL,
    co_enddate date NOT NULL,
    co_job character varying(256) NOT NULL,
    u_userid integer NOT NULL
);


ALTER TABLE ynot.company OWNER TO postgres;

--
-- Name: company_co_companyid_seq; Type: SEQUENCE; Schema: ynot; Owner: postgres
--

CREATE SEQUENCE ynot.company_co_companyid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE ynot.company_co_companyid_seq OWNER TO postgres;

--
-- Name: company_co_companyid_seq; Type: SEQUENCE OWNED BY; Schema: ynot; Owner: postgres
--

ALTER SEQUENCE ynot.company_co_companyid_seq OWNED BY ynot.company.co_companyid;


--
-- Name: educational_institution; Type: TABLE; Schema: ynot; Owner: postgres
--

CREATE TABLE ynot.educational_institution (
    i_institutionid integer NOT NULL,
    i_name character varying(128) NOT NULL,
    i_startdate date NOT NULL,
    i_enddate date NOT NULL,
    i_schooltype text NOT NULL,
    i_degree character varying(8) NOT NULL,
    u_userid integer NOT NULL
);


ALTER TABLE ynot.educational_institution OWNER TO postgres;

--
-- Name: educational_institution_i_institutionid_seq; Type: SEQUENCE; Schema: ynot; Owner: postgres
--

CREATE SEQUENCE ynot.educational_institution_i_institutionid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE ynot.educational_institution_i_institutionid_seq OWNER TO postgres;

--
-- Name: educational_institution_i_institutionid_seq; Type: SEQUENCE OWNED BY; Schema: ynot; Owner: postgres
--

ALTER SEQUENCE ynot.educational_institution_i_institutionid_seq OWNED BY ynot.educational_institution.i_institutionid;


--
-- Name: message; Type: TABLE; Schema: ynot; Owner: postgres
--

CREATE TABLE ynot.message (
    m_messageid integer NOT NULL,
    m_receivetime timestamp without time zone NOT NULL,
    m_content text NOT NULL,
    u_userid integer NOT NULL,
    p_projectid integer NOT NULL
);


ALTER TABLE ynot.message OWNER TO postgres;

--
-- Name: message_m_messageid_seq; Type: SEQUENCE; Schema: ynot; Owner: postgres
--

CREATE SEQUENCE ynot.message_m_messageid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE ynot.message_m_messageid_seq OWNER TO postgres;

--
-- Name: message_m_messageid_seq; Type: SEQUENCE OWNED BY; Schema: ynot; Owner: postgres
--

ALTER SEQUENCE ynot.message_m_messageid_seq OWNED BY ynot.message.m_messageid;


--
-- Name: programming_language; Type: TABLE; Schema: ynot; Owner: postgres
--

CREATE TABLE ynot.programming_language (
    pl_id integer NOT NULL,
    pl_name character varying(32),
    u_userid integer,
    p_projectid integer
);


ALTER TABLE ynot.programming_language OWNER TO postgres;

--
-- Name: programming_language_pl_id_seq; Type: SEQUENCE; Schema: ynot; Owner: postgres
--

CREATE SEQUENCE ynot.programming_language_pl_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE ynot.programming_language_pl_id_seq OWNER TO postgres;

--
-- Name: programming_language_pl_id_seq; Type: SEQUENCE OWNED BY; Schema: ynot; Owner: postgres
--

ALTER SEQUENCE ynot.programming_language_pl_id_seq OWNED BY ynot.programming_language.pl_id;


--
-- Name: project; Type: TABLE; Schema: ynot; Owner: postgres
--

CREATE TABLE ynot.project (
    p_projectid integer NOT NULL,
    p_name character varying(128) NOT NULL,
    p_maxsize integer,
    p_drivelink text,
    p_language character varying(32),
    u_userid integer,
    p_description text,
    p_image text,
    p_zip_code character varying(5),
    p_full_time boolean,
    p_country character(2),
    p_time_zone character varying(4)
);


ALTER TABLE ynot.project OWNER TO postgres;

--
-- Name: project_p_projectid_seq; Type: SEQUENCE; Schema: ynot; Owner: postgres
--

CREATE SEQUENCE ynot.project_p_projectid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE ynot.project_p_projectid_seq OWNER TO postgres;

--
-- Name: project_p_projectid_seq; Type: SEQUENCE OWNED BY; Schema: ynot; Owner: postgres
--

ALTER SEQUENCE ynot.project_p_projectid_seq OWNED BY ynot.project.p_projectid;


--
-- Name: repository; Type: TABLE; Schema: ynot; Owner: postgres
--

CREATE TABLE ynot.repository (
    r_repid integer NOT NULL,
    r_title character varying(128) NOT NULL,
    r_description text,
    r_link text NOT NULL,
    u_userid integer NOT NULL
);


ALTER TABLE ynot.repository OWNER TO postgres;

--
-- Name: repository_r_repid_seq; Type: SEQUENCE; Schema: ynot; Owner: postgres
--

CREATE SEQUENCE ynot.repository_r_repid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE ynot.repository_r_repid_seq OWNER TO postgres;

--
-- Name: repository_r_repid_seq; Type: SEQUENCE OWNED BY; Schema: ynot; Owner: postgres
--

ALTER SEQUENCE ynot.repository_r_repid_seq OWNED BY ynot.repository.r_repid;


--
-- Name: scientific_work; Type: TABLE; Schema: ynot; Owner: postgres
--

CREATE TABLE ynot.scientific_work (
    sw_workid integer NOT NULL,
    sw_title character varying(128) NOT NULL,
    sw_description text,
    sw_content text NOT NULL,
    u_userid integer NOT NULL
);


ALTER TABLE ynot.scientific_work OWNER TO postgres;

--
-- Name: scientific_work_sw_workid_seq; Type: SEQUENCE; Schema: ynot; Owner: postgres
--

CREATE SEQUENCE ynot.scientific_work_sw_workid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE ynot.scientific_work_sw_workid_seq OWNER TO postgres;

--
-- Name: scientific_work_sw_workid_seq; Type: SEQUENCE OWNED BY; Schema: ynot; Owner: postgres
--

ALTER SEQUENCE ynot.scientific_work_sw_workid_seq OWNED BY ynot.scientific_work.sw_workid;


--
-- Name: social_media; Type: TABLE; Schema: ynot; Owner: postgres
--

CREATE TABLE ynot.social_media (
    so_socialid integer NOT NULL,
    so_name character varying(32) NOT NULL,
    so_link text NOT NULL,
    p_projectid integer NOT NULL
);


ALTER TABLE ynot.social_media OWNER TO postgres;

--
-- Name: social_media_so_socialid_seq; Type: SEQUENCE; Schema: ynot; Owner: postgres
--

CREATE SEQUENCE ynot.social_media_so_socialid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE ynot.social_media_so_socialid_seq OWNER TO postgres;

--
-- Name: social_media_so_socialid_seq; Type: SEQUENCE OWNED BY; Schema: ynot; Owner: postgres
--

ALTER SEQUENCE ynot.social_media_so_socialid_seq OWNED BY ynot.social_media.so_socialid;


--
-- Name: swiped_by; Type: TABLE; Schema: ynot; Owner: postgres
--

CREATE TABLE ynot.swiped_by (
    u_userid integer NOT NULL,
    u_swipeduser integer NOT NULL
);


ALTER TABLE ynot.swiped_by OWNER TO postgres;

--
-- Name: user; Type: TABLE; Schema: ynot; Owner: postgres
--

CREATE TABLE ynot."user" (
    u_userid integer NOT NULL,
    u_username character varying(64) NOT NULL,
    u_firstname character varying(128),
    u_surename character varying(128),
    u_email character varying(256) NOT NULL,
    u_password character(64) NOT NULL,
    u_country character(2),
    u_expected_salary integer,
    u_full_time boolean,
    u_zip_code character varying(5),
    u_time_zone character varying(4)
);


ALTER TABLE ynot."user" OWNER TO postgres;

--
-- Name: user_project; Type: TABLE; Schema: ynot; Owner: postgres
--

CREATE TABLE ynot.user_project (
    u_userid integer NOT NULL,
    p_projectid integer NOT NULL
);


ALTER TABLE ynot.user_project OWNER TO postgres;

--
-- Name: user_u_userid_seq; Type: SEQUENCE; Schema: ynot; Owner: postgres
--

CREATE SEQUENCE ynot.user_u_userid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE ynot.user_u_userid_seq OWNER TO postgres;

--
-- Name: user_u_userid_seq; Type: SEQUENCE OWNED BY; Schema: ynot; Owner: postgres
--

ALTER SEQUENCE ynot.user_u_userid_seq OWNED BY ynot."user".u_userid;


--
-- Name: application a_applicationid; Type: DEFAULT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.application ALTER COLUMN a_applicationid SET DEFAULT nextval('ynot.application_a_applicationid_seq'::regclass);


--
-- Name: certificate ce_certid; Type: DEFAULT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.certificate ALTER COLUMN ce_certid SET DEFAULT nextval('ynot.certificate_ce_certid_seq'::regclass);


--
-- Name: company co_companyid; Type: DEFAULT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.company ALTER COLUMN co_companyid SET DEFAULT nextval('ynot.company_co_companyid_seq'::regclass);


--
-- Name: educational_institution i_institutionid; Type: DEFAULT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.educational_institution ALTER COLUMN i_institutionid SET DEFAULT nextval('ynot.educational_institution_i_institutionid_seq'::regclass);


--
-- Name: message m_messageid; Type: DEFAULT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.message ALTER COLUMN m_messageid SET DEFAULT nextval('ynot.message_m_messageid_seq'::regclass);


--
-- Name: programming_language pl_id; Type: DEFAULT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.programming_language ALTER COLUMN pl_id SET DEFAULT nextval('ynot.programming_language_pl_id_seq'::regclass);


--
-- Name: project p_projectid; Type: DEFAULT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.project ALTER COLUMN p_projectid SET DEFAULT nextval('ynot.project_p_projectid_seq'::regclass);


--
-- Name: repository r_repid; Type: DEFAULT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.repository ALTER COLUMN r_repid SET DEFAULT nextval('ynot.repository_r_repid_seq'::regclass);


--
-- Name: scientific_work sw_workid; Type: DEFAULT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.scientific_work ALTER COLUMN sw_workid SET DEFAULT nextval('ynot.scientific_work_sw_workid_seq'::regclass);


--
-- Name: social_media so_socialid; Type: DEFAULT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.social_media ALTER COLUMN so_socialid SET DEFAULT nextval('ynot.social_media_so_socialid_seq'::regclass);


--
-- Name: user u_userid; Type: DEFAULT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot."user" ALTER COLUMN u_userid SET DEFAULT nextval('ynot.user_u_userid_seq'::regclass);


--
-- Data for Name: application; Type: TABLE DATA; Schema: ynot; Owner: postgres
--

COPY ynot.application (a_applicationid, a_titlt, a_content, u_userid, p_projectid) FROM stdin;
\.


--
-- Data for Name: certificate; Type: TABLE DATA; Schema: ynot; Owner: postgres
--

COPY ynot.certificate (ce_certid, ce_title, ce_document, u_userid) FROM stdin;
\.


--
-- Data for Name: company; Type: TABLE DATA; Schema: ynot; Owner: postgres
--

COPY ynot.company (co_companyid, co_name, co_startdate, co_enddate, co_job, u_userid) FROM stdin;
\.


--
-- Data for Name: educational_institution; Type: TABLE DATA; Schema: ynot; Owner: postgres
--

COPY ynot.educational_institution (i_institutionid, i_name, i_startdate, i_enddate, i_schooltype, i_degree, u_userid) FROM stdin;
\.


--
-- Data for Name: message; Type: TABLE DATA; Schema: ynot; Owner: postgres
--

COPY ynot.message (m_messageid, m_receivetime, m_content, u_userid, p_projectid) FROM stdin;
\.


--
-- Data for Name: programming_language; Type: TABLE DATA; Schema: ynot; Owner: postgres
--

COPY ynot.programming_language (pl_id, pl_name, u_userid, p_projectid) FROM stdin;
\.


--
-- Data for Name: project; Type: TABLE DATA; Schema: ynot; Owner: postgres
--

COPY ynot.project (p_projectid, p_name, p_maxsize, p_drivelink, p_language, u_userid, p_description, p_image, p_zip_code, p_full_time, p_country, p_time_zone) FROM stdin;
1	Ynot-Collab	5	https://drive.google.com/drive/u/0/folders/0ACmDA_ZfNX9kUk9PVA	english	\N	\N	\N	\N	\N	\N	\N
3	SwapQl	3	drive.google.com	english	\N	\N	\N	\N	\N	\N	\N
\.


--
-- Data for Name: repository; Type: TABLE DATA; Schema: ynot; Owner: postgres
--

COPY ynot.repository (r_repid, r_title, r_description, r_link, u_userid) FROM stdin;
\.


--
-- Data for Name: scientific_work; Type: TABLE DATA; Schema: ynot; Owner: postgres
--

COPY ynot.scientific_work (sw_workid, sw_title, sw_description, sw_content, u_userid) FROM stdin;
\.


--
-- Data for Name: social_media; Type: TABLE DATA; Schema: ynot; Owner: postgres
--

COPY ynot.social_media (so_socialid, so_name, so_link, p_projectid) FROM stdin;
\.


--
-- Data for Name: swiped_by; Type: TABLE DATA; Schema: ynot; Owner: postgres
--

COPY ynot.swiped_by (u_userid, u_swipeduser) FROM stdin;
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: ynot; Owner: postgres
--

COPY ynot."user" (u_userid, u_username, u_firstname, u_surename, u_email, u_password, u_country, u_expected_salary, u_full_time, u_zip_code, u_time_zone) FROM stdin;
\.


--
-- Data for Name: user_project; Type: TABLE DATA; Schema: ynot; Owner: postgres
--

COPY ynot.user_project (u_userid, p_projectid) FROM stdin;
\.


--
-- Name: application_a_applicationid_seq; Type: SEQUENCE SET; Schema: ynot; Owner: postgres
--

SELECT pg_catalog.setval('ynot.application_a_applicationid_seq', 1, false);


--
-- Name: certificate_ce_certid_seq; Type: SEQUENCE SET; Schema: ynot; Owner: postgres
--

SELECT pg_catalog.setval('ynot.certificate_ce_certid_seq', 1, false);


--
-- Name: company_co_companyid_seq; Type: SEQUENCE SET; Schema: ynot; Owner: postgres
--

SELECT pg_catalog.setval('ynot.company_co_companyid_seq', 1, false);


--
-- Name: educational_institution_i_institutionid_seq; Type: SEQUENCE SET; Schema: ynot; Owner: postgres
--

SELECT pg_catalog.setval('ynot.educational_institution_i_institutionid_seq', 1, false);


--
-- Name: message_m_messageid_seq; Type: SEQUENCE SET; Schema: ynot; Owner: postgres
--

SELECT pg_catalog.setval('ynot.message_m_messageid_seq', 3, true);


--
-- Name: programming_language_pl_id_seq; Type: SEQUENCE SET; Schema: ynot; Owner: postgres
--

SELECT pg_catalog.setval('ynot.programming_language_pl_id_seq', 1, false);


--
-- Name: project_p_projectid_seq; Type: SEQUENCE SET; Schema: ynot; Owner: postgres
--

SELECT pg_catalog.setval('ynot.project_p_projectid_seq', 3, true);


--
-- Name: repository_r_repid_seq; Type: SEQUENCE SET; Schema: ynot; Owner: postgres
--

SELECT pg_catalog.setval('ynot.repository_r_repid_seq', 1, false);


--
-- Name: scientific_work_sw_workid_seq; Type: SEQUENCE SET; Schema: ynot; Owner: postgres
--

SELECT pg_catalog.setval('ynot.scientific_work_sw_workid_seq', 1, false);


--
-- Name: social_media_so_socialid_seq; Type: SEQUENCE SET; Schema: ynot; Owner: postgres
--

SELECT pg_catalog.setval('ynot.social_media_so_socialid_seq', 1, false);


--
-- Name: user_u_userid_seq; Type: SEQUENCE SET; Schema: ynot; Owner: postgres
--

SELECT pg_catalog.setval('ynot.user_u_userid_seq', 1, false);


--
-- Name: application application_pkey; Type: CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.application
    ADD CONSTRAINT application_pkey PRIMARY KEY (a_applicationid);


--
-- Name: certificate certificate_pkey; Type: CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.certificate
    ADD CONSTRAINT certificate_pkey PRIMARY KEY (ce_certid);


--
-- Name: company company_pkey; Type: CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.company
    ADD CONSTRAINT company_pkey PRIMARY KEY (co_companyid);


--
-- Name: educational_institution educational_institution_pkey; Type: CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.educational_institution
    ADD CONSTRAINT educational_institution_pkey PRIMARY KEY (i_institutionid);


--
-- Name: message message_pkey; Type: CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.message
    ADD CONSTRAINT message_pkey PRIMARY KEY (m_messageid);


--
-- Name: swiped_by pk_swipedby; Type: CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.swiped_by
    ADD CONSTRAINT pk_swipedby PRIMARY KEY (u_userid, u_swipeduser);


--
-- Name: user_project pk_userproject; Type: CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.user_project
    ADD CONSTRAINT pk_userproject PRIMARY KEY (u_userid, p_projectid);


--
-- Name: programming_language programming_language_pkey; Type: CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.programming_language
    ADD CONSTRAINT programming_language_pkey PRIMARY KEY (pl_id);


--
-- Name: project project_pkey; Type: CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.project
    ADD CONSTRAINT project_pkey PRIMARY KEY (p_projectid);


--
-- Name: repository repository_pkey; Type: CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.repository
    ADD CONSTRAINT repository_pkey PRIMARY KEY (r_repid);


--
-- Name: scientific_work scientific_work_pkey; Type: CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.scientific_work
    ADD CONSTRAINT scientific_work_pkey PRIMARY KEY (sw_workid);


--
-- Name: social_media social_media_pkey; Type: CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.social_media
    ADD CONSTRAINT social_media_pkey PRIMARY KEY (so_socialid);


--
-- Name: user u_user; Type: CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot."user"
    ADD CONSTRAINT u_user UNIQUE (u_email, u_username);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (u_userid);


--
-- Name: application fk_applicationproject; Type: FK CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.application
    ADD CONSTRAINT fk_applicationproject FOREIGN KEY (p_projectid) REFERENCES ynot.project(p_projectid);


--
-- Name: application fk_applicationuser; Type: FK CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.application
    ADD CONSTRAINT fk_applicationuser FOREIGN KEY (u_userid) REFERENCES ynot."user"(u_userid);


--
-- Name: certificate fk_certificate; Type: FK CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.certificate
    ADD CONSTRAINT fk_certificate FOREIGN KEY (u_userid) REFERENCES ynot."user"(u_userid);


--
-- Name: company fk_company; Type: FK CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.company
    ADD CONSTRAINT fk_company FOREIGN KEY (u_userid) REFERENCES ynot."user"(u_userid);


--
-- Name: educational_institution fk_education; Type: FK CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.educational_institution
    ADD CONSTRAINT fk_education FOREIGN KEY (u_userid) REFERENCES ynot."user"(u_userid);


--
-- Name: message fk_messageproject; Type: FK CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.message
    ADD CONSTRAINT fk_messageproject FOREIGN KEY (p_projectid) REFERENCES ynot.project(p_projectid);


--
-- Name: message fk_messageuser; Type: FK CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.message
    ADD CONSTRAINT fk_messageuser FOREIGN KEY (u_userid) REFERENCES ynot."user"(u_userid);


--
-- Name: project fk_project; Type: FK CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.project
    ADD CONSTRAINT fk_project FOREIGN KEY (u_userid) REFERENCES ynot."user"(u_userid);


--
-- Name: repository fk_repository; Type: FK CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.repository
    ADD CONSTRAINT fk_repository FOREIGN KEY (u_userid) REFERENCES ynot."user"(u_userid);


--
-- Name: scientific_work fk_scientific_work; Type: FK CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.scientific_work
    ADD CONSTRAINT fk_scientific_work FOREIGN KEY (u_userid) REFERENCES ynot."user"(u_userid);


--
-- Name: social_media fk_socialmedia; Type: FK CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.social_media
    ADD CONSTRAINT fk_socialmedia FOREIGN KEY (p_projectid) REFERENCES ynot.project(p_projectid);


--
-- Name: swiped_by fk_swipedby; Type: FK CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.swiped_by
    ADD CONSTRAINT fk_swipedby FOREIGN KEY (u_userid) REFERENCES ynot."user"(u_userid);


--
-- Name: swiped_by fk_swipedby2; Type: FK CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.swiped_by
    ADD CONSTRAINT fk_swipedby2 FOREIGN KEY (u_swipeduser) REFERENCES ynot."user"(u_userid);


--
-- Name: user_project fk_userprojectproject; Type: FK CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.user_project
    ADD CONSTRAINT fk_userprojectproject FOREIGN KEY (p_projectid) REFERENCES ynot.project(p_projectid);


--
-- Name: user_project fk_userprojectuser; Type: FK CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.user_project
    ADD CONSTRAINT fk_userprojectuser FOREIGN KEY (u_userid) REFERENCES ynot."user"(u_userid);


--
-- Name: programming_language projetid_fk; Type: FK CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.programming_language
    ADD CONSTRAINT projetid_fk FOREIGN KEY (p_projectid) REFERENCES ynot.project(p_projectid);


--
-- Name: programming_language userid_fk; Type: FK CONSTRAINT; Schema: ynot; Owner: postgres
--

ALTER TABLE ONLY ynot.programming_language
    ADD CONSTRAINT userid_fk FOREIGN KEY (u_userid) REFERENCES ynot."user"(u_userid);


--
-- PostgreSQL database dump complete
--


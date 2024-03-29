#! /usr/bin/python3
from faker import Faker
import psycopg2
from abc import ABC
import random
"""class Test(metaclass = ABCMeta):
    
    @abstractmethod
    def WriteInDb(self):
        pass
"""



class User():
    def __init__(self,username,firstname,lastname,domain,password,country,expected_salary,full_time,zip_code,time_zone):
        self.username = username
        self.firstname = firstname
        self.lastname = lastname
        self.email = "{0}.{1}@{2}".format(firstname,lastname,domain)
        self.password = password
        self.country = country
        self.expected_salary = expected_salary
        self.full_time = full_time
        self.zip_code = zip_code
        self.time_zone = time_zone

    def WriteInDb(self,conn):
        with conn:
            with conn.cursor() as curs:
                curs.execute("INSERT INTO ynot.user(u_username,u_firstname,u_surename,u_email,u_password,\
                u_country,u_expected_salary,u_full_time,u_zip_code,u_time_zone)\
                values(%(un)s,%(fn)s,%(sn)s,%(e)s,%(pw)s,%(c)s,%(es)s,%(ft)s,%(zc)s,%(tz)s)",{"un":self.username,
                "fn":self.firstname,"sn":self.lastname, "e":self.email,"pw":self.password,"c":self.country,
                "es":self.expected_salary,"ft":self.full_time,"zc":self.zip_code,"tz":self.time_zone})
               


class Project():
    def __init__(self,name,maxsize,drivelink,language,userid,description,zip_code,full_time,country,time_zone,short_description):
        self.name = name
        self.maxsize = maxsize
        self.drivelink = drivelink
        self.language = language
        self.userid = userid
        self.description = description
        self.zip_code = zip_code
        self.full_time = full_time
        self.country = country
        self.time_zone = time_zone
        self.short_description = short_description

    def WriteInDb(self,conn):
        with conn:
            with conn.cursor() as curs:
                curs.execute("INSERT INTO ynot.project (p_name,p_maxsize,p_drivelink,p_language,u_userid,p_description,\
                    p_zip_code,p_full_time,p_country,p_time_zone,p_short_description)\
                    values (%(pn)s,%(pm)s,%(pd)s,%(pl)s,%(ui)s,%(pde)s,%(pz)s,%(pf)s,%(pc)s,%(pt)s,%(ps)s)",{"pn":self.name,
                    "pm":self.maxsize,"pd":self.drivelink,"pl":self.language,"ui":self.userid,"pde":self.description,
                    "pz":self.zip_code,"pf":self.full_time,"pc":self.country,"pt":self.time_zone,
                    "ps":self.short_description})

faker = Faker()
random.seed()
conn = psycopg2.connect("host=127.0.0.1 port=5432 dbname=ynotcollab user=postgres")

"""
with conn:
    with conn.cursor() as cursor:
        cursor.execute("select now()")
        print(cursor.fetchall())


for i in range(10000):
    firstname = faker.first_name()
    lastname = faker.last_name()
    para=""
    for j in faker.paragraph(nb_sentences=6):
        para+=j
    p=Project(faker.company(),random.randint(1,10),faker.uri(),"english",random.randint(1,10000),j,faker.postcode(),bool(random.randint(0,1)),faker.country_code(),"+01",faker.paragraph(nb_sentences=1))
    #u = User("{0}{1}".format(firstname,i),firstname,lastname,faker.domain_name(),"abc",faker.country_code(),random.randint(1000,5000),bool(random.randint(0,1)),faker.postcode(),"+01")
    p.WriteInDb(conn)
"""
for a in range (2,10000):
    with conn:
        with conn.cursor() as c:
            #c.execute("select u_firstname from ynot.user where u_userid = {0}".format(a))
            c.execute("insert into ynot.project_pl (p_id,pl_id) values(%(pid)s,%(plid)s)",{"pid":random.randint(2,10000),"plid":random.randint(1,8)})
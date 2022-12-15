-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2022-12-07 02:10:03.273

-- tables
-- Table: appointments
CREATE TABLE appointments (
    id int  NOT NULL,
    from_time timestamp  NOT NULL,
    to_time timestamp  NOT NULL,
    status varchar(32)  NOT NULL,
    CONSTRAINT appointments_pk PRIMARY KEY (id)
);

-- Table: blogs
CREATE TABLE blogs (
    id int  NOT NULL,
    title varchar(255)  NOT NULL,
    created_at timestamp  NOT NULL,
    content text  NOT NULL,
    users_id int  NOT NULL,
    CONSTRAINT blogs_pk PRIMARY KEY (id)
);

-- Table: call_requests
CREATE TABLE call_requests (
    id int  NOT NULL,
    phone varchar(14)  NOT NULL,
    created_at timestamp  NOT NULL,
    name int  NOT NULL,
    email int  NOT NULL,
    note int  NOT NULL,
    users_id int  NOT NULL,
    CONSTRAINT call_requests_pk PRIMARY KEY (id)
);

-- Table: categories
CREATE TABLE categories (
    id int  NOT NULL,
    name varchar(32)  NOT NULL,
    CONSTRAINT categories_pk PRIMARY KEY (id)
);

-- Table: categories_blogs
CREATE TABLE categories_blogs (
    categories_id int  NOT NULL,
    blogs_id int  NOT NULL,
    CONSTRAINT categories_blogs_pk PRIMARY KEY (categories_id,blogs_id)
);

-- Table: chat_rooms
CREATE TABLE chat_rooms (
    id int  NOT NULL,
    CONSTRAINT chat_rooms_pk PRIMARY KEY (id)
);

-- Table: cities
CREATE TABLE cities (
    id int  NOT NULL,
    name varchar(32)  NOT NULL,
    CONSTRAINT cities_pk PRIMARY KEY (id)
);

-- Table: districts
CREATE TABLE districts (
    id int  NOT NULL,
    name varchar(32)  NOT NULL,
    cities_id int  NOT NULL,
    CONSTRAINT districts_pk PRIMARY KEY (id)
);

-- Table: files
CREATE TABLE files (
    id int  NOT NULL,
    type varchar(16)  NOT NULL,
    content bytea  NOT NULL,
    permission text  NOT NULL,
    properties_id int  NOT NULL,
    blogs_id int  NOT NULL,
    messages_id int  NOT NULL,
    CONSTRAINT files_pk PRIMARY KEY (id)
);

-- Table: messages
CREATE TABLE messages (
    id int  NOT NULL,
    content text  NOT NULL,
    created_at timestamp  NOT NULL,
    chat_rooms_id int  NOT NULL,
    users_id int  NOT NULL,
	read boolean NOT NULL DEFAULT FALSE,
    CONSTRAINT messages_pk PRIMARY KEY (id)
);

-- Table: notifications
CREATE TABLE notifications (
    id int  NOT NULL,
    content text  NOT NULL,
    created_at timestamp  NOT NULL,
	noti_link text,
    users_id int  NOT NULL,
    CONSTRAINT notifications_pk PRIMARY KEY (id)
);

-- Table: payments
CREATE TABLE payments (
    id int  NOT NULL,
    created_at timestamp  NOT NULL,
    method varchar(32)  NOT NULL,
    users_id int  NOT NULL,
    properties_id int  NOT NULL,
    CONSTRAINT payments_pk PRIMARY KEY (id)
);

-- Table: professionals
CREATE TABLE professionals (
    company varchar(128)  NOT NULL,
    registration_number varchar(15)  NOT NULL,
    users_id int  NOT NULL,
    CONSTRAINT professionals_pk PRIMARY KEY (users_id)
);

-- Table: properties
CREATE TABLE properties (
    id int  NOT NULL,
    title varchar(255)  NOT NULL,
    type varchar(32)  NOT NULL,
    created_at timestamp  NOT NULL,
    location varchar(255)  NOT NULL,
    description text  NOT NULL,
    price bigint  NOT NULL,
    priority smallint  NOT NULL,
    area real  NOT NULL,
    expire_date timestamp  NOT NULL,
    juridical_status smallint  NOT NULL,
    juridical_type varchar(32)  NOT NULL,
    access_count int  NOT NULL,
	status smallint NOT NULL,
    conveniences varchar(32)  NULL,
    num_of_bedrooms smallint  NULL,
    num_of_toilets smallint  NULL,
    facade real  NULL,
    floor smallint  NULL,
    direction smallint  NULL,
    furniture smallint  NULL,
    users_id int  NOT NULL,
    wards_id int  NOT NULL,
    CONSTRAINT properties_pk PRIMARY KEY (id)
);

-- Table: properties_users
CREATE TABLE properties_users (
    properties_id int  NOT NULL,
    users_id int  NOT NULL,
    CONSTRAINT properties_users_pk PRIMARY KEY (properties_id,users_id)
);

-- Table: ratings
CREATE TABLE ratings (
    stars real  NOT NULL,
    created_at timestamp  NOT NULL,
    users_id int  NOT NULL,
    CONSTRAINT ratings_pk PRIMARY KEY (stars)
);

-- Table: reports
CREATE TABLE reports (
    id int  NOT NULL,
	reason text NOT NULL,
    content text,
    created_at timestamp  NOT NULL,
    properties_id int  NOT NULL,
    CONSTRAINT reports_pk PRIMARY KEY (id)
);

-- Table: users
CREATE TABLE users (
    id int  NOT NULL,
    email varchar(254)  NOT NULL UNIQUE,
    password varchar(128)  NOT NULL,
    register_at timestamp  NOT NULL,
    last_active timestamp  NOT NULL,
    access_count int  NOT NULL,
    role smallint  NOT NULL,
    full_name varchar(128)  NULL,
    identity_number varchar(12)  NULL,
    avatar text  NULL,
    gender smallint  NULL,
    location int  NULL,
    dob date  NULL,
    description text  NULL,
    facebook text  NULL,
    phone varchar(11)  NULL,
    CONSTRAINT users_pk PRIMARY KEY (id)
);

-- Table: users_appointments
CREATE TABLE users_appointments (
    users_id int  NOT NULL,
    appointments_id int  NOT NULL,
    CONSTRAINT users_appointments_pk PRIMARY KEY (users_id,appointments_id)
);

-- Table: users_chat_rooms
CREATE TABLE users_chat_rooms (
    users_id int  NOT NULL,
    chat_rooms_id int  NOT NULL,
    CONSTRAINT users_chat_rooms_pk PRIMARY KEY (users_id,chat_rooms_id)
);

-- Table: wards
CREATE TABLE wards (
    id int  NOT NULL,
    name varchar(32)  NOT NULL,
    districts_id int  NOT NULL,
    CONSTRAINT wards_pk PRIMARY KEY (id)
);

-- foreign keys
-- Reference: Belongs (table: properties)
ALTER TABLE properties ADD CONSTRAINT Belongs
    FOREIGN KEY (users_id)
    REFERENCES users (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Blogs_Users (table: blogs)
ALTER TABLE blogs ADD CONSTRAINT Blogs_Users
    FOREIGN KEY (users_id)
    REFERENCES users (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: CallRequests_Users (table: call_requests)
ALTER TABLE call_requests ADD CONSTRAINT CallRequests_Users
    FOREIGN KEY (users_id)
    REFERENCES users (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Contains (table: files)
ALTER TABLE files ADD CONSTRAINT Contains
    FOREIGN KEY (properties_id)
    REFERENCES properties (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Districts_Cities (table: districts)
ALTER TABLE districts ADD CONSTRAINT Districts_Cities
    FOREIGN KEY (cities_id)
    REFERENCES cities (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Files_Blogs (table: files)
ALTER TABLE files ADD CONSTRAINT Files_Blogs
    FOREIGN KEY (blogs_id)
    REFERENCES blogs (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Files_Messages (table: files)
ALTER TABLE files ADD CONSTRAINT Files_Messages
    FOREIGN KEY (messages_id)
    REFERENCES messages (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Messages_ChatRooms (table: messages)
ALTER TABLE messages ADD CONSTRAINT Messages_ChatRooms
    FOREIGN KEY (chat_rooms_id)
    REFERENCES chat_rooms (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Messages_Users (table: messages)
ALTER TABLE messages ADD CONSTRAINT Messages_Users
    FOREIGN KEY (users_id)
    REFERENCES users (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Payments_Properties (table: payments)
ALTER TABLE payments ADD CONSTRAINT Payments_Properties
    FOREIGN KEY (properties_id)
    REFERENCES properties (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Payments_Users (table: payments)
ALTER TABLE payments ADD CONSTRAINT Payments_Users
    FOREIGN KEY (users_id)
    REFERENCES users (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Properties_Wards (table: properties)
ALTER TABLE properties ADD CONSTRAINT Properties_Wards
    FOREIGN KEY (wards_id)
    REFERENCES wards (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Reports_Properties (table: reports)
ALTER TABLE reports ADD CONSTRAINT Reports_Properties
    FOREIGN KEY (properties_id)
    REFERENCES properties (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Wards_Districts (table: wards)
ALTER TABLE wards ADD CONSTRAINT Wards_Districts
    FOREIGN KEY (districts_id)
    REFERENCES districts (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: categories_blogs_blogs (table: categories_blogs)
ALTER TABLE categories_blogs ADD CONSTRAINT categories_blogs_blogs
    FOREIGN KEY (blogs_id)
    REFERENCES blogs (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: categories_blogs_categories (table: categories_blogs)
ALTER TABLE categories_blogs ADD CONSTRAINT categories_blogs_categories
    FOREIGN KEY (categories_id)
    REFERENCES categories (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: notifications_users (table: notifications)
ALTER TABLE notifications ADD CONSTRAINT notifications_users
    FOREIGN KEY (users_id)
    REFERENCES users (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: professionals_users (table: professionals)
ALTER TABLE professionals ADD CONSTRAINT professionals_users
    FOREIGN KEY (users_id)
    REFERENCES users (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: properties_users_properties (table: properties_users)
ALTER TABLE properties_users ADD CONSTRAINT properties_users_properties
    FOREIGN KEY (properties_id)
    REFERENCES properties (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: properties_users_users (table: properties_users)
ALTER TABLE properties_users ADD CONSTRAINT properties_users_users
    FOREIGN KEY (users_id)
    REFERENCES users (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: ratings_users (table: ratings)
ALTER TABLE ratings ADD CONSTRAINT ratings_users
    FOREIGN KEY (users_id)
    REFERENCES users (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: users_appointments_appointments (table: users_appointments)
ALTER TABLE users_appointments ADD CONSTRAINT users_appointments_appointments
    FOREIGN KEY (appointments_id)
    REFERENCES appointments (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: users_appointments_users (table: users_appointments)
ALTER TABLE users_appointments ADD CONSTRAINT users_appointments_users
    FOREIGN KEY (users_id)
    REFERENCES users (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: users_chat_rooms_chat_rooms (table: users_chat_rooms)
ALTER TABLE users_chat_rooms ADD CONSTRAINT users_chat_rooms_chat_rooms
    FOREIGN KEY (chat_rooms_id)
    REFERENCES chat_rooms (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: users_chat_rooms_users (table: users_chat_rooms)
ALTER TABLE users_chat_rooms ADD CONSTRAINT users_chat_rooms_users
    FOREIGN KEY (users_id)
    REFERENCES users (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- sequences
-- Sequence: appointments_seq
CREATE SEQUENCE appointments_seq
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      START WITH 1
      NO CYCLE
;

-- Sequence: blogs_seq
CREATE SEQUENCE blogs_seq
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      START WITH 1
      NO CYCLE
;

-- Sequence: call_requests_seq
CREATE SEQUENCE call_requests_seq
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      START WITH 1
      NO CYCLE
;

-- Sequence: categories_seq
CREATE SEQUENCE categories_seq
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      START WITH 1
      NO CYCLE
;

-- Sequence: chat_rooms_seq
CREATE SEQUENCE chat_rooms_seq
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      START WITH 1
      NO CYCLE
;

-- Sequence: cities_seq
CREATE SEQUENCE cities_seq
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      START WITH 1
      NO CYCLE
;

-- Sequence: districts_seq
CREATE SEQUENCE districts_seq
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      START WITH 1
      NO CYCLE
;

-- Sequence: files_seq
CREATE SEQUENCE files_seq
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      START WITH 1
      NO CYCLE
;

-- Sequence: messages_seq
CREATE SEQUENCE messages_seq
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      START WITH 1
      NO CYCLE
;

-- Sequence: notifications_seq
CREATE SEQUENCE notifications_seq
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      START WITH 1
      NO CYCLE
;

-- Sequence: payments_seq
CREATE SEQUENCE payments_seq
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      START WITH 1
      NO CYCLE
;

-- Sequence: properties_seq
CREATE SEQUENCE properties_seq
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      START WITH 1
      NO CYCLE
;

-- Sequence: reports_seq
CREATE SEQUENCE reports_seq
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      START WITH 1
      NO CYCLE
;

-- Sequence: users_seq
CREATE SEQUENCE users_seq
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      START WITH 1
      NO CYCLE
;

-- Sequence: wards_seq
CREATE SEQUENCE wards_seq
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      START WITH 1
      NO CYCLE
;

-- Default sequence for table: appointments
ALTER TABLE appointments ALTER COLUMN id SET DEFAULT nextval('appointments_seq'::regclass);

-- Default sequence for table: blogs
ALTER TABLE blogs ALTER COLUMN id SET DEFAULT nextval('blogs_seq'::regclass);

-- Default sequence for table: call_requests
ALTER TABLE call_requests ALTER COLUMN id SET DEFAULT nextval('call_requests_seq'::regclass);

-- Default sequence for table: categories
ALTER TABLE categories ALTER COLUMN id SET DEFAULT nextval('categories_seq'::regclass);

-- Default sequence for table: chat_rooms
ALTER TABLE chat_rooms ALTER COLUMN id SET DEFAULT nextval('chat_rooms_seq'::regclass);

-- Default sequence for table: cities
ALTER TABLE cities ALTER COLUMN id SET DEFAULT nextval('cities_seq'::regclass);

-- Default sequence for table: districts
ALTER TABLE districts ALTER COLUMN id SET DEFAULT nextval('districts_seq'::regclass);

-- Default sequence for table: files
ALTER TABLE files ALTER COLUMN id SET DEFAULT nextval('files_seq'::regclass);

-- Default sequence for table: messages
ALTER TABLE messages ALTER COLUMN id SET DEFAULT nextval('messages_seq'::regclass);

-- Default sequence for table: notifications
ALTER TABLE notifications ALTER COLUMN id SET DEFAULT nextval('notifications_seq'::regclass);

-- Default sequence for table: payments
ALTER TABLE payments ALTER COLUMN id SET DEFAULT nextval('payments_seq'::regclass);

-- Default sequence for table: properties
ALTER TABLE properties ALTER COLUMN id SET DEFAULT nextval('properties_seq'::regclass);

-- Default sequence for table: reports
ALTER TABLE reports ALTER COLUMN id SET DEFAULT nextval('reports_seq'::regclass);

-- Default sequence for table: users
ALTER TABLE users ALTER COLUMN id SET DEFAULT nextval('users_seq'::regclass);

-- Default sequence for table: wards
ALTER TABLE wards ALTER COLUMN id SET DEFAULT nextval('wards_seq'::regclass);

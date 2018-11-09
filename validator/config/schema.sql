create or replace table if not exists pages
(
id int auto_increment
primary key,
url varchar(512) not null,
description varchar(2048) null,
created datetime default current_timestamp() not null,
modified datetime default current_timestamp() not null on update current_timestamp()
)
;

create or replace table if not exists reports
(
id int auto_increment
primary key,
created datetime default current_timestamp() not null,
modified datetime default current_timestamp() not null on update current_timestamp()
)
;

create or replace table if not exists users
(
id int auto_increment
primary key,
email varchar(64) not null,
password varchar(32) null,
created datetime default current_timestamp() not null,
modified datetime default current_timestamp() not null,
constraint users_email_uindex
unique (email)
)
;

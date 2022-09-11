show databases;
-- users
CREATE TABLE `myblog`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(20) NOT NULL,
  `password` VARCHAR(20) NOT NULL,
  `realname` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id`));
-- blogs
CREATE TABLE `myblog`.`blogs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(50) NOT NULL,
  `content` LONGTEXT NOT NULL,
  `createtime` BIGINT(20) NOT NULL DEFAULT 0,
  `author` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`));
-- 
ALTER TABLE `myblog`.`users` 
ADD COLUMN `state` INT NOT NULL DEFAULT 1 AFTER `realname`;

-- test
use myblog;
show tables;
insert into users(username, `password`, realname) values('tao2', '123', 'tao2')
select * from users;
select id, username from users;
select * from users where username='tao1' and `password`='123';
select * from users where username like '%tao%';
select * from users where username like '%tao%' order by id desc;
-- 关闭安全模式
SET SQL_SAFE_UPDATES=0;
update users set realname='taotao' where username='tao2';
delete from users where username='tao2';
select * from users where state='1';
select * from users where state<>'0';
update users set state='0' where username='tao2';
-- 
insert into blogs(title, content, createtime, author) values('title1', 'content1', 1662879211525, 'tao1')

CREATE TABLE `projects` (
  `id` varchar(255),
  `addres` varchar(255),
  `services` varchar(255)
);

CREATE TABLE `article` (
  `id` varchar(255) PRIMARY KEY,
  `title` varchar(255),
  `body` varchar(255),
  `group_id` varchar(255)
);

CREATE TABLE `group` (
  `id` varchar(255) PRIMARY KEY,
  `category` varchar(255)
);

CREATE TABLE `users` (
  `id` varchar(255) PRIMARY KEY,
  `username` varchar(255),
  `project_name` varchar(255),
  `tel` varchar(255),
  `level` varchar(255)
);

CREATE TABLE `reports` (
  `id` varchar(255) PRIMARY KEY,
  `filename` varchar(255),
  `user_id` varchar(255)
);

ALTER TABLE `group` ADD FOREIGN KEY (`id`) REFERENCES `article` (`id`);

ALTER TABLE `users` ADD FOREIGN KEY (`id`) REFERENCES `reports` (`id`);

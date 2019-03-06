-- -----------------------------------------------------
-- Table `pages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pages` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(512) NOT NULL,
  `url_filter` VARCHAR(512) NULL,
  `image` VARCHAR(128) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `modified` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `created_by` INT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'active',
  PRIMARY KEY (`id`, `image`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `reports`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reports` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `page_id` INT NULL,
  `created_by` INT NULL,
  `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `modified` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `start_time` DATETIME NULL,
  `end_time` DATETIME NULL,
  `page_visited` INT NULL DEFAULT 0,
  `page_errors` INT NULL DEFAULT 0,
  `status` VARCHAR(20) GENERATED ALWAYS AS ('new') VIRTUAL,
  `is_last` SMALLINT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(60) NULL,
  `surname` VARCHAR(60) NULL,
  `email` VARCHAR(64) NOT NULL,
  `password` VARCHAR(32) NULL DEFAULT NULL,
  `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `modified` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `status` VARCHAR(20) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `users_email_uindex` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `report_pages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `report_pages` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `report_id` INT NULL,
  `page_type` VARCHAR(30) NULL,
  `page_url` INT NULL,
  `page_context` TEXT NULL,
  `page_header` TEXT NULL,
  `page_errors` INT NULL DEFAULT 0,
  `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `resources`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `resources` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(30) NULL,
  `url` INT NULL,
  `version_hash` VARCHAR(60) NULL,
  `context` TEXT NULL,
  `header` TEXT NULL,
  `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `page_resources`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `page_resources` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `resources_id` BIGINT NULL,
  `report_page_id` BIGINT NULL,
  `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


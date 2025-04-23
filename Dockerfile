FROM php:8.2-apache

# GD, PDO
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev && \
    docker-php-ext-configure gd --with-freetype --with-jpeg && \
    docker-php-ext-install gd pdo_mysql


RUN a2enmod rewrite
WORKDIR /var/www/html

COPY ./app /var/www/html

RUN chown -R www-data:www-data /var/www/html

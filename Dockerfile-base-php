FROM php:8.2-fpm

ARG BACKEND_WORKDIR=/home/lara/app

RUN apt-get update && apt-get install -y \
    git curl zip unzip libpng-dev libonig-dev libxml2-dev libpq-dev libmagickwand-dev \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-install pdo_mysql pdo_pgsql mbstring exif pcntl bcmath gd sockets \
    && pecl install imagick redis \
    && docker-php-ext-enable imagick redis

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN mkdir -p ${BACKEND_WORKDIR} \
    && chown -R www-data:www-data ${BACKEND_WORKDIR}

WORKDIR ${BACKEND_WORKDIR}

COPY start.sh /start.sh
RUN chmod +x /start.sh

EXPOSE 9000

CMD ["/start.sh"]
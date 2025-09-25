<!--
title: Moving home
date: 2022-08-09
-->

This content now lives on Microsoft Azure!

After joining Microsoft earlier this year, it made sense to use this site as a learning opportunity by migrating the CMS, previously hosted for Free on Heroku, to Azure.

I chose to use a Strapi as my headless CMS, the source of which can be found here. The actual deployment was done using this guide, as a PaaS deployment using Azure App Service. I chose to use Free-tier options wherever I could and went for Azure DB for Postgres DBaaS because the basic config was significantly cheaper than the MySQL option suggested on the site.

The Strapi "provider for Azure uploads" add-on made it possible to use Azure storage blobs for media.

Finally, I used an add-on from the marketplace to enable exports and imports to make the data migration a little easier.

The site is still running for free, however, I am consuming free credits at about R100 a month, mostly from the use of services and tools I'm experimenting with like Azure Front Door. The only component that is critical and paid for is the Postgres DB, for which there isn't a free tier (that I've been able to find yet).

The react front-end is still hosted on Github Pages, for free.
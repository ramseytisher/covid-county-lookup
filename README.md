# What this tool is
This tool is intended to be a simple search on top of information that CMS has provided related to the COVID-19

## Source information
TBD

# Development Information

## Key Development Tools
This appliation was developed with the following tools:
* [Gatsby](https://www.gatsbyjs.org/) - Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps
* [gatsby-transformer-csv](https://www.gatsbyjs.org/packages/gatsby-transformer-csv/) - A Gatsby plugin that parses a CSV file into JSON arrays.
* [Ant Design](https://ant.design/components/overview/) - A provides plenty of UI components to enrich your web applications, and we will improve components experience consistently.

## Contacts
Ramsey Tisher - ramsey.tisher@cerner.com
Frank Layton - frank.layton@cerner.com

# Development/Deployment Guide

The Gatsby command line tool (CLI) is the main entry point for getting up and running with a Gatsby application and for using functionality including running a development server and building out your Gatsby application for deployment.

More info on the CLI [here](https://www.gatsbyjs.org/docs/gatsby-cli/).

```sh
npm install -g gatsby-cli
```

Clone this Github repo to your local machine

```sh
git clone "talk to Ramsey"
```

Install project dependencies

```sh
npm install
```

Ensure you're at the project root directory and start the development server, this servers the app on localhost:8000

```sh
gatsby develop
```

## Deployment

This application is deployed as static files that are hosted at: 
- Production Version: https://powerchartltc.caretrackeronline.com/CovidCountyTracker
- Mock Version: https://wb26.caretrackeronline.com/CovidCountyTracker

### Local Production Build 
To locally test the production build process create a production build

```sh
gatsby build
```

Then serve the files locally, this serves the files on localhost:9000

```sh
gatsby serve
```

### Final Production Build
Since this application is not hosted at the root ( / ) of the domain, it requires a slight modification in the build step to produce a final production build that supports this. See [here](https://www.gatsbyjs.org/docs/path-prefix/) for more information.

```sh
npm run build-prefix
```

Once this process completes, the static files produced in the ./public directory can be given to the Hosted Operations team to replace the existing ones.


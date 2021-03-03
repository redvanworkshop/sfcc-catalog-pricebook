![Logo](docs/img/logo.png "Logo")

SFCC Catalog Pricebook
===

Create Salesforce Commerce Cloud Pricebook XML from Catalog XML

Installation
---

You can install this package via NPM:

```bash
npm install -g sfcc-catalog-pricebook
```

Usage
---

The most common usage will look like this:

```bash
sfcc-catalog-pricebook -i /path/to/catalog.xml
```

**FLAGS:**

Name        | Param           | Alias      | Required | Default Value | Definition
------------|-----------------|------------|----------|---------------|---------------------
Input       | `--input`       | `-i`       | Yes      |               | Path to SFCC Catalog XML File
Output      | `--output`      | `-o`       | No       | pricebook.xml | Path to save XML file ( Defaults to Current Directory )
Name        | `--name`        | `-n`       | No       |               | Name of Pricebook ( Defaults to Catalog Name )
ID          | `--id`          |            | No       |               | ID of Pricebook ( Defaults to Catalog Name )
Description | `--description` | `-d`       | No       |               | Description of Pricebook
Currency    | `--currency`    | `-c`       | No       | USD           | Currency of Pricebook
Min Amount  | `--min-amount`  | `-m`       | No       | 4.99          | Minimum amount generated for a product in the pricebook
Max Amount  | `--max-amount`  | `-x`       | No       | 589.99        | Maximum amount generated for a product in the pricebook

**EXAMPLES:**

```bash
sfcc-catalog-pricebook -i /path/to/catalog.xml

sfcc-catalog-pricebook -i /path/to/catalog.xml -n custom-name
sfcc-catalog-pricebook --input /path/to/catalog.xml --name custom-name

sfcc-catalog-pricebook -i /path/to/catalog.xml -o /path/to/pricebook.xml
sfcc-catalog-pricebook --input /path/to/catalog.xml --output /path/to/pricebook.xml

sfcc-catalog-pricebook -i /path/to/catalog.xml -n custom-name -o /path/to/pricebook.xml
sfcc-catalog-pricebook --input /path/to/catalog.xml --name custom-name --output /path/to/pricebook.xml
```

Troubleshooting
---

Need help on how to run this tool?  Just run the command without options to see example usage & instruction.

```bash
sfcc-catalog-pricebook
```

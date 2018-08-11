#!/usr/bin/env bash

cd docs
rm -rf index.html
asciidoctor -r asciidoctor-diagram src/index.adoc -D ./
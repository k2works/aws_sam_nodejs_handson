#!/usr/bin/env bash

cd docs
rm -rf dist
bundle exec asciidoctor -r asciidoctor-diagram src/index.adoc -D ./dist
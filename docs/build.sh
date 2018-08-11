#!/usr/bin/env bash

cd docs
rm -rf dist
bundle exec asciidoctor -r asciidoctor-diagram src/index.adoc -D ./dist
bundle exec asciidoctor -r asciidoctor-diagram src/fizz_buzz/*.adoc -D ./dist/fizz_buzz
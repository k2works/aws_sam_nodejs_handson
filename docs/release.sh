#!/usr/bin/env bash

cd docs
rm -rf index.html
bundle exec asciidoctor -r asciidoctor-diagram src/index.adoc -D ./
bundle exec asciidoctor -r asciidoctor-diagram src/fizz_buzz/*.adoc -D ./fizz_buzz
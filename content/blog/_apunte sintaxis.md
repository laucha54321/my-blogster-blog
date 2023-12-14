---
draft: true
external: false
title: "Apunte: Sintaxis y semántica de los lenguajes - Lenguaje de programación C"
description: "Apunte de Teoría - Sintaxis Y semántica de los lenguajes."
date: 2023-12-13
---

# El modelo de Compilación de C

## Preprocesador

El preprocesador acepta el código fuente como entrada y es responsable de:

- quitar los comentarios.
- Interpretar las directivas del preprocesador. (Inician con #)

### Directivas del preprocesador.

- #define <nombre de la macro> <nombre de remplazo>
- #undefine <nombre de la macro>
- #include <archivo>
- #if inclusion condicional

## Compilador

El compilador traduce el código fuente a código de ensamblador(assembly).

## Ensamblador

El ensamblador crea a partir del código fuente en assembly código maquina para luego correrlo en el procesador.

[Difference between Compiler and Assembler](https://www.geeksforgeeks.org/difference-between-compiler-and-assembler/)

## Ligador

Si algún archivo fuente hace referencia a funciones de una biblioteca o otros archivos, el ligador se encarga de unirlas a con los otros archivos.

# Archivos de cabecera (headers).

[Short introduction to header files in C](https://www.youtube.com/watch?v=u1e0gLoz1SU)

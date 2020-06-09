import Knex from 'knex'; //OS TIPOS DO TS SEMPRE COMEÇAM COM A PRIMEIRA LETRA MAIUSCULA

// CRIAR A TABELA
export async function up(knex: Knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}

// BACKUP (VOLTA ATRÁS CASO ALGO DER ERRO)
export async function down(knex: Knex) {
    knex.schema.dropTable('items'); 
}
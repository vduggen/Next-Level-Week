import Knex from 'knex'; //OS TIPOS DO TS SEMPRE COMEÇAM COM A PRIMEIRA LETRA MAIUSCULA

// CRIAR A TABELA
export async function up(knex: Knex) {
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('longitude').notNullable();
        table.decimal('latitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
}

// BACKUP (VOLTA ATRÁS CASO ALGO DER ERRO)
export async function down(knex: Knex) {
    knex.schema.dropTable('point'); 
}
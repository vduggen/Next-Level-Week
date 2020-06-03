import Knex from 'knex'; //OS TIPOS DO TS SEMPRE COMEÇAM COM A PRIMEIRA LETRA MAIUSCULA

// CRIAR A TABELA
export async function up(knex: Knex) {
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();

        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('points');

        table.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('items');
    });
}

// BACKUP (VOLTA ATRÁS CASO ALGO DER ERRO)
export async function down(knex: Knex) {
    knex.schema.dropTable('point_items'); 
}
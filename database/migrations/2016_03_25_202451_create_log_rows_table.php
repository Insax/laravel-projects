<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLogRowsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('log_rows', function (Blueprint $table) {
            $table->integer('log_id')->unsigned();
            $table->integer('row_id')->unsigned();
            $table->string('date');
            $table->string('time');
            $table->string('event');
            $table->string('sourceGUID')->nullable();
            $table->string('sourceName')->nullable();
            $table->string('sourceFlags')->nullable();
            $table->string('destGUID')->nullable();
            $table->string('destName')->nullable();
            $table->string('destFlags')->nullable();
            $table->integer('spellID')->unsigned()->nullable();
            $table->string('spellName')->nullable();
            $table->string('spellSchool')->nullable();
            $table->integer('amount')->unsigned()->nullable();
            $table->integer('school')->unsigned()->nullable();
            $table->integer('resisted')->unsigned()->nullable();
            $table->integer('blocked')->unsigned()->nullable();
            $table->integer('absorbed')->unsigned()->nullable();
            $table->boolean('critical')->nullable();
            $table->boolean('glancing')->nullable();
            $table->boolean('crushing')->nullable();
            $table->string('missType')->nullable();
            $table->integer('powerType')->nullable();
            $table->integer('extraAmount')->nullable();
            $table->integer('extraSpellID')->nullable();
            $table->string('extraSpellName')->nullable();
            $table->integer('extraSpellSchool')->nullable();
            $table->string('auraType')->nullable();
            $table->integer('enviromentalType')->nullable();
            $table->integer('overheal')->nullable();
            $table->integer('overkill')->nullable();
            $table->integer('itemID')->nullable();
            $table->string('itemName')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('log_rows');
    }
}

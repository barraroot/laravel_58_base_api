<?php

use Illuminate\Database\Seeder;
use App\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        factory(User::class, 1)->create([
            'email' => 'barraroot@gmail.com',
            'password' => bcrypt('idd20kfa06'),
            'temp_password' => 'idd20kfa06',
            'name' => 'Lucas Carvalho',
        ]);
    }
}

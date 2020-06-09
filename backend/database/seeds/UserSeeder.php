<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        {
            DB::table('users')->insert([
                [
                    'name' => 'Mai',
                    // 'role' => 'admin',
                    'email' => 'maitecondepalacio@gmail.com',
                    'password' => Hash::make('123'),
                    
                ],
              
                [
                    'name' => 'Lola',
                    'email' => 'lola@gmail.com',
                    'password' => Hash::make('123'),
                   
                ],
                [
                    'name' => 'lulu',
                    'email' => 'lulu@gmail.com',
                    'password' => Hash::make('123'),
                   
                ],
                [
                    'name' => 'lala',
                    'email' => 'lala@gmail.com',
                    'password' => Hash::make('123'),
                   
                ],
                [
                    'name' => 'lili',
                    'email' => 'lili@gmail.com',
                    'password' => Hash::make('123'),
                   
                ],
                [
                    'name' => 'nana',
                    'email' => 'nana@gmail.com',
                    'password' => Hash::make('123'),
                   
                ],
                [
                    'name' => 'nini',
                    'email' => 'nini@gmail.com',
                    'password' => Hash::make('123'),
                   
                ],
                [
                    'name' => 'lolo',
                    'email' => 'lolo@gmail.com',
                    'password' => Hash::make('123'),
                   
                ],
                [
                    'name' => 'sasa',
                    'email' => 'sasa@gmail.com',
                       'password' => Hash::make('123'),
                   
                ],
                [
                    'name' => 'sisi',
                    'email' => 'sisi@gmail.com',
                       'password' => Hash::make('123'),
                   
                ],
                
            ]);
        }
    }
    }


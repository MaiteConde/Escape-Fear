<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;


class RoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('rooms')->insert([
            [
                'name' => 'Project Ðelta',
                'time' => '60 min',
                'history' => '
                Things are not always what they seem; the first appearance deceives many; the intelligence of a few perceives what has been carefully hidden”
                
                Strange things are happening in the Sally Star King Hospital. The centre has been vacated for years, yet screams and noises can still be heard inside at night. Does your team have what it takes to investigate and expose the secrets inside? If you are looking for a narrative puzzle game with a psychological twist, this is your room. Be cautious and enter at your own risk.',
                'persons' => '2-4',
                'city' => 'Madrid',
                'image_path' => 'https://wallpaperaccess.com/full/415840.jpg',
                'category_id' => 1
            ],
            [
                'name' => 'MAD',
                'time' => '70 min',
                'history' => 'That’s one small step for a man, one giant leap for mankind”

                In 2052, you have been recruited to join Rainbow Galactic’s team of astronauts under the Project Delta Agreement. Your mission is to fly onboard spaceship Venus and carry biological experiments on other terrestrial planets to achieve space colonisation through genetic engineering. Will you be able to revolutionise the entire human race or will the project’s dark secrets consume you first?',
                'persons' => '2-4',
                'city' => 'Madrid',
                'image_path' => 'https://www.nypl.org/sites/default/files/mystery_88fc11f4a48be33b.jpg',
                'category_id' => 2
            ],

            [
                'name' => 'War on Horizon Alpha',
                'time' => '60 min',
                'history' => 'The galaxy is in peril, trapped under the cyborg fist of the feared Alpha One faction. The imperial regime rules from the space-fortress codenamed Horizon Alpha, a terrifying superweapon with an impenetrable security system.

                You are a plucky band of rebels - the best in the parsec - chosen to infiltrate the Horizon Alpha. In 60 minutes a massive rebel fleet will arrive through hyperspace and fire on the base, but you must manually deactivate the shields if this daring assault is to work.
                
                Grab your laser-swords. Arm your blasters. Complete the mission and escape before the Horizon Alpha is reduced to atoms. Good luck, you are our only hope!',
                'persons' => '2-4',
                'city' => 'Barcelona',
                'image_path' => 'https://images5.alphacoders.com/542/thumb-1920-542019.jpg',
                'category_id' => 1
            ],
            [
                'name' => 'Butcher’s Lair',
                'time' => '90 min',
                'history' => 'Dr Vladimir Knifesblade: university professor by day, serial killer by night. He is an educated man - he knows his classical music, his literature, and which bits of the human body taste best. The FBI have nicknamed him The Butcher.

                A simple dinner party invitation to you - some of his favourite students - fails to mention that you are the main ingredient on the menu tonight. You have become The Butchers latest victims, or at least you will be if you dont escape from his bloody basement lair.
                You have 60 minutes before the doctor begins cooking. Only the brightest brains survive... the rest get eaten with some fava beans and a nice Chianti.
                
                So be smart and dont be lasagne.',
                'persons' => '2-4',
                'city' => 'Barcelona',
                'image_path' => 'https://writinggoals.com/sites/default/files/field/image/suspense-conspiracy-thriller.jpeg',
                'category_id' => 2
            ]
        ]);
    }
}

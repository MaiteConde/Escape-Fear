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
                'name' => 'MAD',
                'time' => '60 min',
                'history' => '
                Things are not always what they seem; the first appearance deceives many; the intelligence of a few perceives what has been carefully hidden”.
                Strange things are happening in the Sally Star King Hospital. The centre has been vacated for years, yet screams and noises can still be heard inside at night. Does your team have what it takes to investigate and expose the secrets inside? If you are looking for a narrative puzzle game with a psychological twist, this is your room. Be cautious and enter at your own risk.',
                'persons' => '2-4',
                'city' => 'Madrid',
                'image_path' => 'https://www.nypl.org/sites/default/files/mystery_88fc11f4a48be33b.jpg',
                'category_id' => 2
            ],

            [
                'name' => 'Primal fear',
                'time' => '60 min',
                'history' => 'You are an exalted group of scientists exploring new, uncharted territories across the globe in search of new flora and fauna.
                Your most recent assignment is a newly discovered island on which there have been reported sightings of creatures the world has never seen before and as you travel closer, you feel the excitement in your stomach start to grow.
                Your helicopter lands in a deep forest and you step out of your vehicle ready for your next adventure. What you don’t yet realise is that this may well be your last…',
                'persons' => '2-4',
                'city' => 'Barcelona',
                'image_path' => 'https://i.pinimg.com/originals/44/2b/cd/442bcd708a7c5aa7419fbe843219928d.jpg',
                'category_id' => 1
            ],
            
            [
                'name' => 'Zoe',
                'time' => '70 min',
                'history' => 'There is one scene in your mind that is busily following you. It has initially appeared in your dreams, the
                scene of an abandoned house, but it has started chasing you during the daytime. This house seems to
                be calling for you, it attracts you with an unknown force...What’s wrong with it? Is there anyone living
                there?Does he or she need help? You cannot survive it any longer, it’s driving you crazy...You start
                surfing and accidently you find the needed location…You reach the place. You open the door
                and...become trapped. You have only one hour to escape until your personality
                starts to change.',
                'persons' => '2-4',
                'city' => 'Madrid',
                'image_path' => 'https://images.unsplash.com/photo-1494376877685-d3d2559d4f82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                'category_id' => 1
            ],

            [
                'name' => 'Butcher’s Lair',
                'time' => '90 min',
                'history' => 'Dr Vladimir Knifesblade: university professor by day, serial killer by night. He is an educated man - he knows his classical music, his literature, and which bits of the human body taste best. The FBI have nicknamed him The Butcher.
                A simple dinner party invitation to you - some of his favourite students - fails to mention that you are the main ingredient on the menu tonight. You have become The Butchers latest victims, or at least you will be if you dont escape from his bloody basement lair.
                You have 60 minutes before the doctor begins cooking. Only the brightest brains survive... the rest get eaten with some fava beans and a nice Chianti. So be smart and dont be lasagne.',
                'persons' => '2-4',
                'city' => 'Barcelona',
                'image_path' => 'https://writinggoals.com/sites/default/files/field/image/suspense-conspiracy-thriller.jpeg',
                'category_id' => 2
            ]
        ]);
    }
}

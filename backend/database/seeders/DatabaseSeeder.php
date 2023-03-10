<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Product;
use App\Models\Brand;
use App\Models\Image;
use App\Models\Role;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        Role::truncate();
        Image::truncate();
        Product::truncate();


        // Seeding the Roles
        Role::create([
            'id'=>1,
            'role_name'=>'user'
        ]); Role::create([
             'id'=>2,
            'role_name'=>'storekeeper'
        ]); Role::create([
            'id'=>3,
            'role_name'=>'admin'
        ]);Role::create([
            'id'=>4,
            'role_name'=>'accountant'
        ]);
        // Seed for Brands
        Brand::create([
            'name'=>'Samsung'
        ]);   Brand::create([
            'name'=>'Apple'
        ]);   Brand::create([
            'name'=>'Huawei'
        ]);   Brand::create([
            'name'=>'Nokia'
        ]);   Brand::create([
            'name'=>'Sony'
        ]);   Brand::create([
            'name'=>'LG'
        ]);
        //seed images for products

        Image::create([
           'product_id'=>1,
           'src'=>'/storage/images/mobile1.jpg',
        ]);   Image::create([
           'product_id'=>2,
           'src'=>'/storage/images/mobile1.jpg',
        ]);   Image::create([
           'product_id'=>3,
           'src'=>'/storage/images/mobile1.jpg',
        ]);   Image::create([
           'product_id'=>4,
           'src'=>'/storage/images/mobile1.jpg',
        ]);   Image::create([
           'product_id'=>5,
           'src'=>'/storage/images/mobile1.jpg',
        ]);   Image::create([
           'product_id'=>6,
           'src'=>'/storage/images/mobile1.jpg',
        ]);   Image::create([
           'product_id'=>7,
           'src'=>'/storage/images/mobile1.jpg',
        ]);   Image::create([
           'product_id'=>8,
           'src'=>'/storage/images/mobile1.jpg',
        ]);   Image::create([
           'product_id'=>9,
           'src'=>'/storage/images/mobile1.jpg',
        ]);  Image::create([
           'product_id'=>10,
           'src'=>'/storage/images/mobile1.jpg',
        ]);


        Image::create([
            'product_id'=>1,
            'src'=>'/storage/images/mobile2.jpg',
        ]);   Image::create([
        'product_id'=>2,
        'src'=>'/storage/images/mobile2.jpg',
    ]);


        // seed products
        Product::create([
            "name"=> "ultra pro max full",
            "processor"=>"Snapdragon 8",
            "ram"=>"2",
            "description"=>"For Gen Z, video isn’t just video. They think of it as a lifestyle – a universal language for how they learn, grow, express, talk, shop, connect, create, and fight boredom with their friends in real time. That’s why they’re demanding a mobile device that finally breaks all the rules of video and makes their everyday more epic than ever. Introducing Samsung Galaxy S22 Ultra, the brilliant new smartphones designed specifically to break the rules of video to meet the needs of Gen Z’s native language; video. With this new video machine, we’re setting an epic new standard. Now, you can communicate with your friends online while you simultaneously co-watch the latest new YouTube videos.**** Record your greatest nights with breathtaking low-light video like never before. Capture the true colors and contrasts of late-night parties that couldn’t be properly depicted before. And you can finally devour vids in direct sunlight with a screen that’s so bright, you’ll never have to worry about glare on the beach again. Galaxy S22 Ultra is redefining the epic standard – both for what a smartphone can do with video and for what you can communicate, create, and experience with it. In other words, if you’ve got something to say, Galaxy S22 Ultra makes it possible to say anything you want with video, at any time-even in the darkness of night. *Supports Full HD video with up to 60 fps. **Based on average battery life under typical usage conditions. Average expected performance based on typical use. Actual battery life depends on factors such as network, features selected, frequency of calls, and voice, data, and other application usage patterns. ***Wall charger sold separately; use only Samsung-approved chargers and cables. To avoid injury or damage to your device, do not use incompatible, worn or damaged batteries, chargers or cables. Supports 45W charging. ****Requires all participants have Galaxy S22 devices with Android 12 OS.",

            "brand_id"=> 3,
            "amount_in_warehouse"=> 50,
            "price_for_selling"=> 200.5,
        ]); Product::create([
            "name"=> "Example 2",
            "processor"=>"Snapdragon 8 Gen 2",
            "ram"=>"2",
            "description"=>"For Gen Z, video isn’t just video. They think of it as a lifestyle – a universal language for how they learn, grow, express, talk, shop, connect, create, and fight boredom with their friends in real time. That’s why they’re demanding a mobile device that finally breaks all the rules of video and makes their everyday more epic than ever. Introducing Samsung Galaxy S22 Ultra, the brilliant new smartphones designed specifically to break the rules of video to meet the needs of Gen Z’s native language; video. With this new video machine, we’re setting an epic new standard. Now, you can communicate with your friends online while you simultaneously co-watch the latest new YouTube videos.**** Record your greatest nights with breathtaking low-light video like never before. Capture the true colors and contrasts of late-night parties that couldn’t be properly depicted before. And you can finally devour vids in direct sunlight with a screen that’s so bright, you’ll never have to worry about glare on the beach again. Galaxy S22 Ultra is redefining the epic standard – both for what a smartphone can do with video and for what you can communicate, create, and experience with it. In other words, if you’ve got something to say, Galaxy S22 Ultra makes it possible to say anything you want with video, at any time-even in the darkness of night. *Supports Full HD video with up to 60 fps. **Based on average battery life under typical usage conditions. Average expected performance based on typical use. Actual battery life depends on factors such as network, features selected, frequency of calls, and voice, data, and other application usage patterns. ***Wall charger sold separately; use only Samsung-approved chargers and cables. To avoid injury or damage to your device, do not use incompatible, worn or damaged batteries, chargers or cables. Supports 45W charging. ****Requires all participants have Galaxy S22 devices with Android 12 OS.",

            "brand_id"=> 2,
            "amount_in_warehouse"=> 50,
            "price_for_selling"=> 200.5,
        ]); Product::create([
            "name"=> "ultra pro max full",
            "processor"=>"Snapdragon 8 Gen 2",
            "ram"=>"2",
            "description"=>"For Gen Z, video isn’t just video. They think of it as a lifestyle – a universal language for how they learn, grow, express, talk, shop, connect, create, and fight boredom with their friends in real time. That’s why they’re demanding a mobile device that finally breaks all the rules of video and makes their everyday more epic than ever. Introducing Samsung Galaxy S22 Ultra, the brilliant new smartphones designed specifically to break the rules of video to meet the needs of Gen Z’s native language; video. With this new video machine, we’re setting an epic new standard. Now, you can communicate with your friends online while you simultaneously co-watch the latest new YouTube videos.**** Record your greatest nights with breathtaking low-light video like never before. Capture the true colors and contrasts of late-night parties that couldn’t be properly depicted before. And you can finally devour vids in direct sunlight with a screen that’s so bright, you’ll never have to worry about glare on the beach again. Galaxy S22 Ultra is redefining the epic standard – both for what a smartphone can do with video and for what you can communicate, create, and experience with it. In other words, if you’ve got something to say, Galaxy S22 Ultra makes it possible to say anything you want with video, at any time-even in the darkness of night. *Supports Full HD video with up to 60 fps. **Based on average battery life under typical usage conditions. Average expected performance based on typical use. Actual battery life depends on factors such as network, features selected, frequency of calls, and voice, data, and other application usage patterns. ***Wall charger sold separately; use only Samsung-approved chargers and cables. To avoid injury or damage to your device, do not use incompatible, worn or damaged batteries, chargers or cables. Supports 45W charging. ****Requires all participants have Galaxy S22 devices with Android 12 OS.",

            "brand_id"=> 1,
            "amount_in_warehouse"=> 50,
            "price_for_selling"=> 200.5,
        ]); Product::create([
            "name"=> "Example 2",
            "processor"=>"Snapdragon 8 Gen 2",
            "ram"=>"2",
            "description"=>"For Gen Z, video isn’t just video. They think of it as a lifestyle – a universal language for how they learn, grow, express, talk, shop, connect, create, and fight boredom with their friends in real time. That’s why they’re demanding a mobile device that finally breaks all the rules of video and makes their everyday more epic than ever. Introducing Samsung Galaxy S22 Ultra, the brilliant new smartphones designed specifically to break the rules of video to meet the needs of Gen Z’s native language; video. With this new video machine, we’re setting an epic new standard. Now, you can communicate with your friends online while you simultaneously co-watch the latest new YouTube videos.**** Record your greatest nights with breathtaking low-light video like never before. Capture the true colors and contrasts of late-night parties that couldn’t be properly depicted before. And you can finally devour vids in direct sunlight with a screen that’s so bright, you’ll never have to worry about glare on the beach again. Galaxy S22 Ultra is redefining the epic standard – both for what a smartphone can do with video and for what you can communicate, create, and experience with it. In other words, if you’ve got something to say, Galaxy S22 Ultra makes it possible to say anything you want with video, at any time-even in the darkness of night. *Supports Full HD video with up to 60 fps. **Based on average battery life under typical usage conditions. Average expected performance based on typical use. Actual battery life depends on factors such as network, features selected, frequency of calls, and voice, data, and other application usage patterns. ***Wall charger sold separately; use only Samsung-approved chargers and cables. To avoid injury or damage to your device, do not use incompatible, worn or damaged batteries, chargers or cables. Supports 45W charging. ****Requires all participants have Galaxy S22 devices with Android 12 OS.",

            "brand_id"=> 4,
            "amount_in_warehouse"=> 50,
            "price_for_selling"=> 200.5,
        ]);Product::create([
            "name"=> "ultra pro max full",
            "processor"=>"Snapdragon 8 Gen 5",
            "ram"=>"2",
            "description"=>"For Gen Z, video isn’t just video. They think of it as a lifestyle – a universal language for how they learn, grow, express, talk, shop, connect, create, and fight boredom with their friends in real time. That’s why they’re demanding a mobile device that finally breaks all the rules of video and makes their everyday more epic than ever. Introducing Samsung Galaxy S22 Ultra, the brilliant new smartphones designed specifically to break the rules of video to meet the needs of Gen Z’s native language; video. With this new video machine, we’re setting an epic new standard. Now, you can communicate with your friends online while you simultaneously co-watch the latest new YouTube videos.**** Record your greatest nights with breathtaking low-light video like never before. Capture the true colors and contrasts of late-night parties that couldn’t be properly depicted before. And you can finally devour vids in direct sunlight with a screen that’s so bright, you’ll never have to worry about glare on the beach again. Galaxy S22 Ultra is redefining the epic standard – both for what a smartphone can do with video and for what you can communicate, create, and experience with it. In other words, if you’ve got something to say, Galaxy S22 Ultra makes it possible to say anything you want with video, at any time-even in the darkness of night. *Supports Full HD video with up to 60 fps. **Based on average battery life under typical usage conditions. Average expected performance based on typical use. Actual battery life depends on factors such as network, features selected, frequency of calls, and voice, data, and other application usage patterns. ***Wall charger sold separately; use only Samsung-approved chargers and cables. To avoid injury or damage to your device, do not use incompatible, worn or damaged batteries, chargers or cables. Supports 45W charging. ****Requires all participants have Galaxy S22 devices with Android 12 OS.",

            "brand_id"=> 4,
            "amount_in_warehouse"=> 50,
            "price_for_selling"=> 200.5,
        ]);Product::create([
            "name"=> "Example 2",
            "processor"=>"Snapdragon 8 Gen 2",
            "ram"=>"2",
            "description"=>"For Gen Z, video isn’t just video. They think of it as a lifestyle – a universal language for how they learn, grow, express, talk, shop, connect, create, and fight boredom with their friends in real time. That’s why they’re demanding a mobile device that finally breaks all the rules of video and makes their everyday more epic than ever. Introducing Samsung Galaxy S22 Ultra, the brilliant new smartphones designed specifically to break the rules of video to meet the needs of Gen Z’s native language; video. With this new video machine, we’re setting an epic new standard. Now, you can communicate with your friends online while you simultaneously co-watch the latest new YouTube videos.**** Record your greatest nights with breathtaking low-light video like never before. Capture the true colors and contrasts of late-night parties that couldn’t be properly depicted before. And you can finally devour vids in direct sunlight with a screen that’s so bright, you’ll never have to worry about glare on the beach again. Galaxy S22 Ultra is redefining the epic standard – both for what a smartphone can do with video and for what you can communicate, create, and experience with it. In other words, if you’ve got something to say, Galaxy S22 Ultra makes it possible to say anything you want with video, at any time-even in the darkness of night. *Supports Full HD video with up to 60 fps. **Based on average battery life under typical usage conditions. Average expected performance based on typical use. Actual battery life depends on factors such as network, features selected, frequency of calls, and voice, data, and other application usage patterns. ***Wall charger sold separately; use only Samsung-approved chargers and cables. To avoid injury or damage to your device, do not use incompatible, worn or damaged batteries, chargers or cables. Supports 45W charging. ****Requires all participants have Galaxy S22 devices with Android 12 OS.",

            "brand_id"=> 4,
            "amount_in_warehouse"=> 50,
            "price_for_selling"=> 200.5,
        ]);Product::create([
            "name"=> "ultra pro max full",
            "processor"=>"Snapdragon 8 Gen 5",
            "ram"=>"2",
            "description"=>"For Gen Z, video isn’t just video. They think of it as a lifestyle – a universal language for how they learn, grow, express, talk, shop, connect, create, and fight boredom with their friends in real time. That’s why they’re demanding a mobile device that finally breaks all the rules of video and makes their everyday more epic than ever. Introducing Samsung Galaxy S22 Ultra, the brilliant new smartphones designed specifically to break the rules of video to meet the needs of Gen Z’s native language; video. With this new video machine, we’re setting an epic new standard. Now, you can communicate with your friends online while you simultaneously co-watch the latest new YouTube videos.**** Record your greatest nights with breathtaking low-light video like never before. Capture the true colors and contrasts of late-night parties that couldn’t be properly depicted before. And you can finally devour vids in direct sunlight with a screen that’s so bright, you’ll never have to worry about glare on the beach again. Galaxy S22 Ultra is redefining the epic standard – both for what a smartphone can do with video and for what you can communicate, create, and experience with it. In other words, if you’ve got something to say, Galaxy S22 Ultra makes it possible to say anything you want with video, at any time-even in the darkness of night. *Supports Full HD video with up to 60 fps. **Based on average battery life under typical usage conditions. Average expected performance based on typical use. Actual battery life depends on factors such as network, features selected, frequency of calls, and voice, data, and other application usage patterns. ***Wall charger sold separately; use only Samsung-approved chargers and cables. To avoid injury or damage to your device, do not use incompatible, worn or damaged batteries, chargers or cables. Supports 45W charging. ****Requires all participants have Galaxy S22 devices with Android 12 OS.",

            "brand_id"=> 5,
            "amount_in_warehouse"=> 50,
            "price_for_selling"=> 200.5,
        ]);Product::create([
            "name"=> "Example 3",
            "processor"=>"Snapdragon 8 Gen 5",
            "ram"=>"2",
            "description"=>"For Gen Z, video isn’t just video. They think of it as a lifestyle – a universal language for how they learn, grow, express, talk, shop, connect, create, and fight boredom with their friends in real time. That’s why they’re demanding a mobile device that finally breaks all the rules of video and makes their everyday more epic than ever. Introducing Samsung Galaxy S22 Ultra, the brilliant new smartphones designed specifically to break the rules of video to meet the needs of Gen Z’s native language; video. With this new video machine, we’re setting an epic new standard. Now, you can communicate with your friends online while you simultaneously co-watch the latest new YouTube videos.**** Record your greatest nights with breathtaking low-light video like never before. Capture the true colors and contrasts of late-night parties that couldn’t be properly depicted before. And you can finally devour vids in direct sunlight with a screen that’s so bright, you’ll never have to worry about glare on the beach again. Galaxy S22 Ultra is redefining the epic standard – both for what a smartphone can do with video and for what you can communicate, create, and experience with it. In other words, if you’ve got something to say, Galaxy S22 Ultra makes it possible to say anything you want with video, at any time-even in the darkness of night. *Supports Full HD video with up to 60 fps. **Based on average battery life under typical usage conditions. Average expected performance based on typical use. Actual battery life depends on factors such as network, features selected, frequency of calls, and voice, data, and other application usage patterns. ***Wall charger sold separately; use only Samsung-approved chargers and cables. To avoid injury or damage to your device, do not use incompatible, worn or damaged batteries, chargers or cables. Supports 45W charging. ****Requires all participants have Galaxy S22 devices with Android 12 OS.",

            "brand_id"=> 5,
            "amount_in_warehouse"=> 50,
            "price_for_selling"=> 200.5,
        ]);Product::create([
            "name"=> "Example 3",
            "processor"=>"Snapdragon 8 Gen 2",
            "ram"=>"2",
            "description"=>"For Gen Z, video isn’t just video. They think of it as a lifestyle – a universal language for how they learn, grow, express, talk, shop, connect, create, and fight boredom with their friends in real time. That’s why they’re demanding a mobile device that finally breaks all the rules of video and makes their everyday more epic than ever. Introducing Samsung Galaxy S22 Ultra, the brilliant new smartphones designed specifically to break the rules of video to meet the needs of Gen Z’s native language; video. With this new video machine, we’re setting an epic new standard. Now, you can communicate with your friends online while you simultaneously co-watch the latest new YouTube videos.**** Record your greatest nights with breathtaking low-light video like never before. Capture the true colors and contrasts of late-night parties that couldn’t be properly depicted before. And you can finally devour vids in direct sunlight with a screen that’s so bright, you’ll never have to worry about glare on the beach again. Galaxy S22 Ultra is redefining the epic standard – both for what a smartphone can do with video and for what you can communicate, create, and experience with it. In other words, if you’ve got something to say, Galaxy S22 Ultra makes it possible to say anything you want with video, at any time-even in the darkness of night. *Supports Full HD video with up to 60 fps. **Based on average battery life under typical usage conditions. Average expected performance based on typical use. Actual battery life depends on factors such as network, features selected, frequency of calls, and voice, data, and other application usage patterns. ***Wall charger sold separately; use only Samsung-approved chargers and cables. To avoid injury or damage to your device, do not use incompatible, worn or damaged batteries, chargers or cables. Supports 45W charging. ****Requires all participants have Galaxy S22 devices with Android 12 OS.",

            "brand_id"=> 6,
            "amount_in_warehouse"=> 50,
            "price_for_selling"=> 200.5,
        ]);Product::create([
            "name"=> "Example 3",
            "processor"=>"Snapdragon 3 Gen 2",
            "ram"=>"2",
            "description"=>"For Gen Z, video isn’t just video. They think of it as a lifestyle – a universal language for how they learn, grow, express, talk, shop, connect, create, and fight boredom with their friends in real time. That’s why they’re demanding a mobile device that finally breaks all the rules of video and makes their everyday more epic than ever. Introducing Samsung Galaxy S22 Ultra, the brilliant new smartphones designed specifically to break the rules of video to meet the needs of Gen Z’s native language; video. With this new video machine, we’re setting an epic new standard. Now, you can communicate with your friends online while you simultaneously co-watch the latest new YouTube videos.**** Record your greatest nights with breathtaking low-light video like never before. Capture the true colors and contrasts of late-night parties that couldn’t be properly depicted before. And you can finally devour vids in direct sunlight with a screen that’s so bright, you’ll never have to worry about glare on the beach again. Galaxy S22 Ultra is redefining the epic standard – both for what a smartphone can do with video and for what you can communicate, create, and experience with it. In other words, if you’ve got something to say, Galaxy S22 Ultra makes it possible to say anything you want with video, at any time-even in the darkness of night. *Supports Full HD video with up to 60 fps. **Based on average battery life under typical usage conditions. Average expected performance based on typical use. Actual battery life depends on factors such as network, features selected, frequency of calls, and voice, data, and other application usage patterns. ***Wall charger sold separately; use only Samsung-approved chargers and cables. To avoid injury or damage to your device, do not use incompatible, worn or damaged batteries, chargers or cables. Supports 45W charging. ****Requires all participants have Galaxy S22 devices with Android 12 OS.",

            "brand_id"=> 6,
            "amount_in_warehouse"=> 50,
            "price_for_selling"=> 200.5,
        ]);
    }
}

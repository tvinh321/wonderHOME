<?php
    // This is where all the universal settings is stored
    $ABS_ROOT_PATH = "wonderHOME";

    //available pages
    $PAGES = ["home"];
    $SERVICES = ["nha-dat-ban", "tim-chuyen-gia", "huong-dan"];
    $PROPERTY = ["thong-tin"];

    $NAVLINK_VIE = array(["Nhà đất bán", "dich-vu/".$SERVICES[0]], ["Tìm chuyên gia", "dich-vu/".$SERVICES[1]], ["Hướng dẫn", "dich-vu/".$SERVICES[2]]); 

    //Font
    $FONT_FAMILY = "Lexend";

    //color palette
    $PRIMARY_BLACK = "171717";
    $PRIMARY_AMBER = "fbbf24";
    $PRIMARY_WHITE = "fff";
?>

<style>
html *
{
   font-family: <?php echo $FONT_FAMILY; ?>
}
</style>

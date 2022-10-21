<?php
    // This is where all the universal settings is stored
    $ABS_ROOT_PATH = "wonderHOME";

    //available pages
    $PAGES = ["home"];
    $SERVICES = ["mua-nha", "ban-nha", "tim-chuyen-gia"];
    $PROPERTY = ["thong-tin"];

    $NAVLINK_VIE = array(["Mua nhà", "dich-vu/".$SERVICES[0]], ["Bán nhà", "dich-vu/".$SERVICES[1]], ["Tìm chuyên gia", "dich-vu/".$SERVICES[2]], ["Hướng dẫn", ""]); 

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

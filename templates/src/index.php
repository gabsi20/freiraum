<?php 

include 'header.php';

?>

<div class="container main">
    <div class="navigation js-navigation">
        <ul>
            <li><a href="die-freiraeumer" class="js-navigation-link" data-page="die-freiraeumer">Die freiRäumer</a></li>
            <li><a href="der-freiraum" class="js-navigation-link" data-page="der-freiraum">Der frei.Raum</a></li>
            <li><a href="fuer-wen" class="js-navigation-link" data-page="fuer-wen">Für Wen</a></li>
            <li><a href="was-ist-los" class="js-navigation-link" data-page="was-ist-los">Was ist los</a></li>
            <li class="sub"><a href="bewegung" class="js-navigation-link" data-page="bewegung">Bewegung</a></li>
            <li class="sub"><a href="begegnung" class="js-navigation-link" data-page="begegnung">Begegnung</a></li>
            <li><a href="dein-freiraum" class="js-navigation-link" data-page="dein-freiraum">Dein Freiraum</a></li>
        </ul>
    </div>
    <div class="content js-content">
        <?php include $page.'.php' ?>
    </div>
</div>
</div>

<?php include 'footer.php' ?>
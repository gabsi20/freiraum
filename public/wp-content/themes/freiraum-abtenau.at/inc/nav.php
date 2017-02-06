<?php $active = str_replace('/','',substr(get_permalink(),strlen(get_site_url()),strlen(get_permalink()))); ?>
<div class="navigation js-navigation">
    <ul>
        <li>
            <a href="die-freiraumer"    class="js-navigation-link <?php if($active == 'die-freiraumer'){ echo "active"; } ?>" data-page="die-freiraumer">Die freiRäumer</a>
        </li>
        <li>
            <a href="/der-freiraum"  class="js-navigation-link <?php if($active == 'der-freiraum'){ echo "active"; } ?>" data-page="der-freiraum">Der frei.Raum</a>
        </li>
        <li>
            <a href="/fur-wen"      class="js-navigation-link <?php if($active == 'fur-wen'){ echo "active"; } ?>" data-page="fur-wen">Für Wen</a>
        </li>
        <li>
            <a href="/daten-und-fakten"   class="js-navigation-link <?php if($active == 'daten-und-fakten'){ echo "active"; } ?>" data-page="daten-und-fakten">Daten & Fakten</a>
        </li>
        <li class="sub">
            <a href="/belegungsplan"      class="js-navigation-link <?php if($active == 'belegungsplan'){ echo "active"; } ?>" data-page="belegungsplan">Belegungsplan</a>
        </li>
        <li class="sub">
            <a href="/veranstaltungen"     class="js-navigation-link <?php if($active == 'veranstaltungen'){ echo "active"; } ?>" data-page="veranstaltungen">Veranstaltungen</a>
        </li>
        <li>
            <a href="/dein-freiraum" class="js-navigation-link <?php if($active == 'dein-freiraum'){ echo "active"; } ?>" data-page="dein-freiraum">Dein Freiraum</a>
        </li>
    </ul>
</div>
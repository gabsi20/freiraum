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
            <a href="/was-ist-los"   class="js-navigation-link <?php if($active == 'was-ist-los'){ echo "active"; } ?>" data-page="was-ist-los">Was ist los</a>
        </li>
        <li class="sub">
            <a href="/bewegung"      class="js-navigation-link <?php if($active == 'bewegung'){ echo "active"; } ?>" data-page="bewegung">Bewegung</a>
        </li>
        <li class="sub">
            <a href="/begegnung"     class="js-navigation-link <?php if($active == 'begegnung'){ echo "active"; } ?>" data-page="begegnung">Begegnung</a>
        </li>
        <li>
            <a href="/dein-freiraum" class="js-navigation-link <?php if($active == 'dein-freiraum'){ echo "active"; } ?>" data-page="dein-freiraum">Dein Freiraum</a>
        </li>
    </ul>
</div>
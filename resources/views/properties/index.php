<?php foreach ($properties as $property) { ?>
    <div class="property">
        <div class="property__image">
            <img src="https://picsum.photos/300/200" alt="">
        </div>
        <div class="property__info">
            <div class="property__info__title">
                <h3><?php echo $property->location; ?></h3>
            </div>
            <div class="property__info__description">
                <p><?php echo $property->description; ?></p>
            </div>
            <div class="property__info__price">
                <p><?php echo $property->price; ?></p>
            </div>
            <div class="property__info__bedrooms">
                <p><?php echo $property->bedrooms; ?></p>
            </div>
            <div class="property__info__bathrooms">
                <p><?php echo $property->bathrooms; ?></p>
            </div>
            <div class="property__info__direction">
                <p><?php echo $property->direction; ?></p>
            </div>
            <div class="property__info__priority">
                <p><?php echo $property->priority; ?></p>
            </div>
            <div class="property__info__facade">
                <p><?php echo $property->facade; ?></p>
            </div>
            <div class="property__info__area">
                <p><?php echo $property->area; ?></p>
            </div>
            <div class="property__info__juridical">
                <p><?php echo $property->juridical; ?></p>
            </div>
            <div class="property__info__conveniences">
                <p><?php echo $property->conveniences; ?></p>
            </div>
            <div class="property__info__expired_at">
                <p><?php echo $property->expired_at; ?></p>
            </div>
            <div class="property__info__user">
                <p><?php echo $property->user->name; ?></p>
            </div>
        </div>
    </div>
<?php } ?>
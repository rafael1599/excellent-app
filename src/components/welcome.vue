<template>
    <div class="welcome">
        <p>Welcome to Excellent Taxi</p>
        <p>Your Premier Transportation Partner! We provide top-notch taxi home with modern vehicles and skilled drivers,
            ensuring a seamless journey. Whether you need a quick ride or airport transfers, trust us for punctuality,
            safety,
            and exceptional service. Book with us today!</p>
    </div>
</template>

<script>
export default {
    name: "WelcomeComponent"
}
</script>

<style lang="scss">
.welcome{
    background-color: #D9D9D9;
    padding: 72px 86px;
    border-radius: 10px;
    font-family: 'Judson';
    p{
        font-size: 50px;
        text-align: center;
    }
}

@media (max-width: 959px) {
    .welcome{
        padding: 32px 32px;
        p{
            font-size: 32px;
        }
    }
}

@media (max-width: 450px) {
    .welcome{
        padding: 24px 24px;
        p{
            font-size: 24px;
        }
    }
}
</style>
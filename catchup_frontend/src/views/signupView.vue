<template>
    <div
        class="relative bg-[url(../assets/img3.jpg)] bg-center flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div class="relative py-3 sm:w-96 mx-auto text-center">
            <span class="text-2xl font-bold ">Create New Account</span>
            <div class="mt-4 bg-white shadow rounded-lg text-left">
                <div class="h-2 bg-purple-400 rounded-t-md"></div>
                <div class="px-8 py-6 ">
                    <label class="block font-semibold"> Full Name</label>
                    <input type="text"  placeholder="Full Name"
                        class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md">
                    <label class="block mt-3 font-semibold"> Username</label>
                    <input type="text"  v-model="name" placeholder="Username"
                        class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md">
                        {{ name }}
                    <label class="block mt-3 font-semibold"> Password</label>
                    <input type="password"  placeholder="Password"
                        class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md">
                    <label class="block mt-3 font-semibold"> Current Location</label>
                    <input type="text"  placeholder="Location"
                        class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md">
                    <div class="flex justify-center items-baseline">
                        <button type="submit"
                            class="mt-4 bg-purple-500 text-white py-2 px-6  rounded-md hover:bg-purple-600 ">Signup</button>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        name: ''
    }
}

</script>
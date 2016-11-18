<template>
    <div>
        <select v-model="selected_sheng">
            <option v-for="option in options_sheng" :value="option.value">
                {{ option.text }}
            </option>
        </select>
        <span>Selected: {{ selected_sheng }}</span>

        <select v-model="selected_shi">
            <option v-for="option in options_shi" :value="option.value">
                {{ option.text }}
            </option>
        </select>
        <span>Selected: {{ selected_shi }}</span>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                selected_sheng: '1',
                options_sheng: [
                  { text: '浙江', value: '1' },
                  { text: '安徽', value: '2' },
                  { text: '河南', value: '3' }
                ],
                selected_shi: "11",
                options_shi: [
                  { text: '杭州', value: '11' },
                  { text: '宁波', value: '12' },
                  { text: '台州', value: '13' }
                ]
            }
        }
    }
</script>

declare module "vue/types/options" {

    interface ComponentOptions<V extends Vue> {

        [propName: string]: any;

    }
}
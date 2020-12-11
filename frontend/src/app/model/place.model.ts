export class Place {
    constructor(
        public name?: String,
        public _id?: String,
        public sort_no?: Number,
        public category?: String,
        public grup?: String,
        public perma?: String,
        public secim_baslik?: String,
        public secim_spot?: String,
        public description?: String,
        public popular?: String,
        public transfree?: Boolean,
        public meta_title?: String,
        public meta_description?: String,
        public status?: Boolean,
        public main_image?: String,
        public images?: Object[]
       
    ) {


        this.images = []
    }
}



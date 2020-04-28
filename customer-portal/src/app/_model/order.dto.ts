export class PlaceOrderDto {
    constructor(
        public superpowerCode: string,
        public orderFrom: Date,
        public orderTo: Date){}

}


export class OrderDto {
    constructor(
        public orderId: string,
        public customerCode: string,
        public customerName: string,
        public superCode: string,
        public superpowerName: string,
        public status: string,
        public assignedHeroId: string,
        public assignedHeroName: string
    ){}
}
    
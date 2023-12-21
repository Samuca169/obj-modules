export function shipment(order) {
    const discountedPrice = order.basic - (order.basic * (order.discount / 100));
    if(discountedPrice < 100.0) {
        return 20;
    }else if(discountedPrice >= 100.0 && discountedPrice < 200.0) {
        return 12.0;
    }else {
        return 0.0;
    }
}
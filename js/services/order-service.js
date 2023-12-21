import * as shippingService from "./shipping-service.js"

export function total(order) {
    const freight = shippingService.shipment(order);
    const discountedPrice = order.basic - (order.basic * (order.discount / 100));
    return discountedPrice + freight;
}
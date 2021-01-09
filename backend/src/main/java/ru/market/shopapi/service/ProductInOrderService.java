package ru.market.shopapi.service;

import ru.market.shopapi.entity.ProductInOrder;
import ru.market.shopapi.entity.User;


public interface ProductInOrderService {
    void update(String itemId, Integer quantity, User user);
    ProductInOrder findOne(String itemId, User user);
}

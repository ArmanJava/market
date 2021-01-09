package ru.market.shopapi.repository;

import ru.market.shopapi.entity.ProductInOrder;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProductInOrderRepository extends JpaRepository<ProductInOrder, Long> {

}

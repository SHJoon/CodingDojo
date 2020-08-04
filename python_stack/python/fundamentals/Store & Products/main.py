import store
import product

target = store.Store("Target")

milk = product.Product("milk", 1, "food")
egg = product.Product("egg", 2, "food")
camera = product.Product("camera", 100, "tech")
chair = product.Product("chair", 30, "furniture")
table = product.Product("table", 200, "furniture")

target.add_product(milk)
target.add_product(egg)
target.add_product(camera)
target.add_product(chair)
target.add_product(table)

target.sell_product(2)

target.inflation(0.2)

target.sell_product(0)

target.product_list[1].print_info()
target.set_clearance("furniture",0.5)

target.sell_product(1)
target.sell_product(1)
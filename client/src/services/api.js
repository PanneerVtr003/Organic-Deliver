import API from "../services/api"; // add this import

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const orderData = {
      user: currentUser?._id,   // logged-in user ID
      items: cart.map(item => ({
        product: item._id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      totalPrice: getCartTotal() + 2.99 + (getCartTotal() * 0.08),
      deliveryInfo: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        zipCode: formData.zipCode,
      },
      paymentMethod: formData.paymentMethod,
    };

    // 🚀 send order to backend
    await API.post("/orders", orderData);

    clearCart();
    toast.success("Order placed successfully!");
    navigate("/");
  } catch (error) {
    console.error("Order failed", error);
    toast.error("Failed to place order");
  } finally {
    setLoading(false);
  }
};

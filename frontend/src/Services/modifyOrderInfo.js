function modifyOrderedInfo(orderedInfo) {
  if (orderedInfo && orderedInfo.length > 0) {
    // Get the last item (which should be customer info)
    const userObject = orderedInfo[orderedInfo.length - 1];

    // Create a new object using the last item (user info)
    const newUserObject = { user: userObject.customerInfo };

    return {
      products: orderedInfo.slice(0, -1),
      userObject: newUserObject,
    };
  } else {
    console.error("No ordered info found.");
    return null;
  }
}
export default modifyOrderedInfo;

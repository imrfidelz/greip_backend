
const { createNotification } = require('../controllers/notifications');
const User = require('../models/User');

class NotificationService {
  constructor() {
    this.io = null;
    console.log('NotificationService initialized' .blue.bold);
  }
  
  setSocketIO(io) {
    this.io = io;
    console.log('Socket.IO instance set in NotificationService');
  }
  
  async sendNotification(recipientId, notificationData) {
    try {
      console.log('Sending notification to user:', recipientId, notificationData);
      
      // Create notification in database
      const notification = await createNotification({
        recipient: recipientId,
        ...notificationData
      });
      
      console.log('Notification created in database:', notification._id);
      
      // Emit real-time notification if socket.io is available
      if (this.io) {
        this.io.to(`user_${recipientId}`).emit('newNotification', {
          id: notification._id,
          type: notification.type,
          title: notification.title,
          message: notification.message,
          data: notification.data,
          sender: notification.sender,
          createdAt: notification.createdAt,
          read: notification.read
        });
        
        console.log('Real-time notification emitted to user:', recipientId);
      } else {
        console.log('Socket.IO not available, skipping real-time emission');
      }
      
      return notification;
    } catch (error) {
      console.error('Error sending notification:', error);
      throw error;
    }
  }
  
  async sendToMultipleUsers(recipientIds, notificationData) {
    try {
      const notifications = [];
      
      for (const recipientId of recipientIds) {
        const notification = await this.sendNotification(recipientId, notificationData);
        notifications.push(notification);
      }
      
      return notifications;
    } catch (error) {
      console.error('Error sending notifications to multiple users:', error);
      throw error;
    }
  }

  // Helper method to get followers of a user
  async getFollowers(userId) {
    try {
      const user = await User.findById(userId).populate('followers', '_id');
      return user ? user.followers.map(follower => follower._id.toString()) : [];
    } catch (error) {
      console.error('Error getting followers:', error);
      return [];
    }
  }
  
  // Specific notification types for followers only
  async notifyFollowersPropertyListed(propertyOwnerId, propertyData) {
    try {
      const followers = await this.getFollowers(propertyOwnerId);
      
      if (followers.length === 0) {
        console.log('No followers to notify for property listing');
        return [];
      }

      return this.sendToMultipleUsers(followers, {
        sender: propertyOwnerId,
        type: 'property_listed',
        title: 'New Property Listed',
        message: `A user you follow has listed a new property: "${propertyData.title}"`,
        data: { propertyId: propertyData._id, ownerId: propertyOwnerId }
      });
    } catch (error) {
      console.error('Error notifying followers of property listing:', error);
      throw error;
    }
  }

  async notifyFollowersLandListed(landOwnerId, landData) {
    try {
      const followers = await this.getFollowers(landOwnerId);
      
      if (followers.length === 0) {
        console.log('No followers to notify for land listing');
        return [];
      }

      return this.sendToMultipleUsers(followers, {
        sender: landOwnerId,
        type: 'land_listed',
        title: 'New Land Listed',
        message: `A user you follow has listed new land: "${landData.title}"`,
        data: { landId: landData._id, ownerId: landOwnerId }
      });
    } catch (error) {
      console.error('Error notifying followers of land listing:', error);
      throw error;
    }
  }

  async notifyFollowersPropertyUpdated(propertyOwnerId, propertyData) {
    try {
      const followers = await this.getFollowers(propertyOwnerId);
      
      if (followers.length === 0) {
        console.log('No followers to notify for property update');
        return [];
      }

      return this.sendToMultipleUsers(followers, {
        sender: propertyOwnerId,
        type: 'property_updated',
        title: 'Property Updated',
        message: `A property you might be interested in has been updated: "${propertyData.title}"`,
        data: { propertyId: propertyData._id, ownerId: propertyOwnerId }
      });
    } catch (error) {
      console.error('Error notifying followers of property update:', error);
      throw error;
    }
  }

  async notifyFollowersLandUpdated(landOwnerId, landData) {
    try {
      const followers = await this.getFollowers(landOwnerId);
      
      if (followers.length === 0) {
        console.log('No followers to notify for land update');
        return [];
      }

      return this.sendToMultipleUsers(followers, {
        sender: landOwnerId,
        type: 'land_updated',
        title: 'Land Updated',
        message: `A land listing you might be interested in has been updated: "${landData.title}"`,
        data: { landId: landData._id, ownerId: landOwnerId }
      });
    } catch (error) {
      console.error('Error notifying followers of land update:', error);
      throw error;
    }
  }

  async notifyFollowersPropertyPriceChange(propertyOwnerId, propertyData) {
    try {
      const followers = await this.getFollowers(propertyOwnerId);
      
      if (followers.length === 0) {
        console.log('No followers to notify for property price change');
        return [];
      }

      return this.sendToMultipleUsers(followers, {
        sender: propertyOwnerId,
        type: 'property_price_change',
        title: 'Property Price Updated',
        message: `Price updated on "${propertyData.title}" - now $${propertyData.currentPrice}`,
        data: { 
          propertyId: propertyData._id, 
          ownerId: propertyOwnerId,
          originalPrice: propertyData.originalPrice,
          currentPrice: propertyData.currentPrice
        }
      });
    } catch (error) {
      console.error('Error notifying followers of property price change:', error);
      throw error;
    }
  }

  async notifyFollowersLandPriceChange(landOwnerId, landData) {
    try {
      const followers = await this.getFollowers(landOwnerId);
      
      if (followers.length === 0) {
        console.log('No followers to notify for land price change');
        return [];
      }

      return this.sendToMultipleUsers(followers, {
        sender: landOwnerId,
        type: 'land_price_change',
        title: 'Land Price Updated',
        message: `Price updated on "${landData.title}" - now $${landData.currentPrice}`,
        data: { 
          landId: landData._id, 
          ownerId: landOwnerId,
          originalPrice: landData.originalPrice,
          currentPrice: landData.currentPrice
        }
      });
    } catch (error) {
      console.error('Error notifying followers of land price change:', error);
      throw error;
    }
  }
  
  // Existing notification methods - keep existing code
  async notifyPropertyListed(propertyOwnerId, propertyData) {
    return this.sendNotification(propertyOwnerId, {
      type: 'property_listed',
      title: 'Property Listed Successfully',
      message: `Your property "${propertyData.title}" has been listed successfully.`,
      data: { propertyId: propertyData._id }
    });
  }
  
  async notifyOrderStatusChange(userId, orderData) {
    return this.sendNotification(userId, {
      type: 'order_status_change',
      title: 'Order Status Updated',
      message: `Your order #${orderData.orderNumber} status has been updated to ${orderData.status}.`,
      data: { orderId: orderData._id, orderNumber: orderData.orderNumber, status: orderData.status }
    });
  }
  
  async notifyNewFollower(userId, followerData) {
    return this.sendNotification(userId, {
      sender: followerData._id,
      type: 'new_follower',
      title: 'New Follower',
      message: `${followerData.name} started following you.`,
      data: { followerId: followerData._id }
    });
  }
  
  async notifyPropertyPriceChange(interestedUserIds, propertyData) {
    return this.sendToMultipleUsers(interestedUserIds, {
      type: 'property_price_change',
      title: 'Price Drop Alert',
      message: `Price reduced on "${propertyData.title}" - was $${propertyData.originalPrice}, now $${propertyData.currentPrice}`,
      data: { propertyId: propertyData._id }
    });
  }
}

// Export singleton instance
module.exports = new NotificationService();

import {
    Model,
    Sequelize,
    DataTypes
} from 'sequelize'


const PRODUCT_TABLE = 'products'

const ProductSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        unique: true
    },
    productName: {
        allowNull: false,
        field: 'product_name',
        type: DataTypes.STRING
    },
    price: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    image: {
        allowNull: false,
        type: DataTypes.STRING
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        allowNull: true,
        type: DataTypes.DATE,
        field: 'updated_at',
        defaultValue: Sequelize.NOW
    }
}


class Product extends Model {
    static associate() {
        //associate
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'Product',
            timeStamps: false
        }
    }
}

export {
    PRODUCT_TABLE,
    ProductSchema,
    Product
}

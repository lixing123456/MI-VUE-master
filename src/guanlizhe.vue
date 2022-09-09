<template>
  <div id="app">
    <!-- 头部主导航 -->
    <header class="headerBox" ref="headerBox">
      <h1 class="logo">九零电商校园购物管理系统</h1>
      <div class="baseBox">
        <el-button size="mini" @click="handleAdd()" style="margin: 0 36px; ">
          <span style="color: black;">新增商品</span>
        </el-button>
        <router-link to="/beijing">安全退出</router-link>
      </div>
    </header>

    <!-- 主体内容 -->
    <main class="mainBox" ref="mainBox">
      <el-table :data="searchData" style="width: 100%" border v-if="this.searchData.length!==0">
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="图片" prop="src">
          <template slot-scope="scope">
            <img :src="scope.row.src" alt style="width: 100px;height: 100px" />
          </template>
        </el-table-column>
        <el-table-column label="描述" prop="desc"></el-table-column>
        <el-table-column label="价格" prop="price">
          <template slot-scope="scope">
            <span>{{scope.row.price}}元</span>
          </template>
        </el-table-column>
        <el-table-column label="特点" prop="gongneng"></el-table-column>
        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="mini"
              clearable
              placeholder="输入关键字搜索"
              @blur="searchmethods"
            />
          </template>
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-table :data="shoppingList" style="width: 100%" border v-if="this.searchData.length===0">
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="图片" prop="src">
          <template slot-scope="scope">
            <img :src="scope.row.src" alt style="width: 100px;height: 100px" />
          </template>
        </el-table-column>
        <el-table-column label="描述" prop="desc"></el-table-column>
        <el-table-column label="价格" prop="price">
          <template slot-scope="scope">
            <span>{{scope.row.price}}元</span>
          </template>
        </el-table-column>
        <el-table-column label="特点" prop="gongneng"></el-table-column>
        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="mini"
              clearable
              placeholder="输入关键字搜索"
              @blur="searchmethods"
            />
          </template>
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </main>

    <!-- DIALOG -->
    <el-dialog :visible="dialogVisible" title="编辑商品" width="50%" :before-close="closeDialog">
      <el-form :model="bianji">
        <el-form-item label="名称">
          <el-input v-model="bianji.name"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="bianji.desc"></el-input>
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model="bianji.price"></el-input>
        </el-form-item>
        <el-form-item label="特点">
          <el-input v-model="bianji.gongneng"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="submit" :plain="true">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible="dialogVisibleAAA" title="新增商品" width="50%" :before-close="closeDialogAAA">
      <el-form :model="add">
        <el-form-item label="名称">
          <el-input v-model="add.name"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="add.desc"></el-input>
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model="add.price"></el-input>
        </el-form-item>
        <el-form-item label="特点">
          <el-input v-model="add.gongneng"></el-input>
        </el-form-item>
        <el-form-item label="图片">
          <el-input v-model="add.src"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDialogAAA">取 消</el-button>
        <el-button type="primary" @click="submitAAA" :plain="true">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from "./api/index";
export default {
  components: {},
  data() {
    return {
      dialogVisible: false,
      dialogVisibleAAA: false,

      shoppingList: [],
      search: "",
      searchData: [],
      bianji: {
        id: "",
        name: "",
        desc: "",
        price: "",
        gongneng: ""
      },
      add: {
        name: "",
        desc: "",
        price: "",
        gongneng: "",
        src: ""
      }
    };
  },
  methods: {
    searchmethods() {
      if (this.search == "") {
        this.searchData = [];
        return;
      }
      this.searchData = this.shoppingList.filter(item => {
        return item.name.includes(this.search);
      });
      if (this.searchData.length == 0) {
        this.$message({
          message: "您搜索的商品并不存在哦",
          type: "warning"
        });
      }
    },

    handleAdd() {
      this.dialogVisibleAAA = true;
    },
    handleEdit(row) {
      console.log(this.shoppingList, "pppppppppppppp");
      this.dialogVisible = true;
      this.bianji.id = row.id;
      this.bianji.name = row.name;
      this.bianji.desc = row.desc;
      this.bianji.price = row.price;
      this.bianji.gongneng = row.gongneng;
      console.log(this.bianji, "66666666666666");
    },
    handleDelete(row) {
      this.$confirm("此操作将永久删除该商品, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          axios
            .post("/product/delete", {
              id: row.id
            })
            .then(result => {
              if (parseInt(result.code) === 0) {
              }
            });
          setTimeout(this.getData, 100);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    closeDialog() {
      this.dialogVisible = false;
      this.bianji.id = "";
      this.bianji.name = "";
      this.bianji.desc = "";
      this.bianji.price = "";
      this.bianji.gongneng = "";
    },
    closeDialogAAA() {
      this.dialogVisibleAAA = false;
      this.add.name = "";
      this.add.desc = "";
      this.add.price = "";
      this.add.gongneng = "";
      this.add.src = "";
    },
    submit() {
      axios
        .post("/product/update", {
          id: this.bianji.id,
          name: this.bianji.name,
          desc: this.bianji.desc,
          price: this.bianji.price,
          gongneng: this.bianji.gongneng
        })
        .then(result => {
          if (parseInt(result.code) === 0) {
          }
        });
      this.dialogVisible = false;
      this.bianji.id = "";
      this.bianji.name = "";
      this.bianji.desc = "";
      this.bianji.price = "";
      this.bianji.gongneng = "";
      this.getData();
      this.$message({
        message: "修改商品信息成功",
        type: "success"
      });
    },
    submitAAA() {
      axios
        .post("/product/add", {
          name: this.add.name,
          desc: this.add.desc,
          price: this.add.price,
          gongneng: this.add.gongneng,
          src: this.add.src
        })
        .then(result => {
          if (parseInt(result.code) === 0) {
          }
        });
      this.dialogVisibleAAA = false;
      this.add.name = "";
      this.add.desc = "";
      this.add.price = "";
      this.add.gongneng = "";
      this.add.src = "";
      this.getData();
      this.$message({
        message: "新增商品成功",
        type: "success"
      });
    },
    getData() {
      axios.get("/product/list").then(result => {
        if (parseInt(result.code) === 0) {
          this.shoppingList = result.data;
        }
      });
    }
  },
  created() {},
  mounted() {
    this.getData();
  }
};
</script>

<style lang='less'>
html,
body,
#app {
  height: 100%;
  font-size: 14px;
}

/* ==HEADER== */
@H: 62px;
.headerBox {
  display: flex;
  justify-content: space-between;
  height: @H;
  background: #3a3d42;
  overflow: hidden;

  .logo {
    width: 20%;
    line-height: @H;
    text-align: center;
    font-size: 20px;
    color: #fff;
    letter-spacing: 3px;
  }

  .baseBox {
    box-sizing: border-box;
    padding-right: 10px;
    width: 30%;
    line-height: @H;
    text-align: right;
    font-size: 16px;

    span,
    a {
      margin: 0 5px;
      color: #fff;
    }

    a {
      text-decoration: underline;
    }
  }

  .el-menu-demo {
    box-sizing: border-box;
    width: 46%;

    li {
      font-size: 16px !important;

      a {
        display: block;
        height: 100%;
      }
    }
  }
}

.mainBox {
  display: flex;
  overflow: hidden;
}
.el-input {
  width: 90% !important;
}
.el-table {
  color: black !important;
}
.el-table tr {
  background-color: rgb(216, 216, 216) !important;
}
.el-table th > .cell {
  color: black !important;
}
.el-input__inner {
  border: 1px solid black !important;
}
</style>
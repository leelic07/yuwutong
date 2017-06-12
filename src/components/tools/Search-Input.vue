<template>
    <div class = "dataTables_filter">
        <label>
            <div class="box-tools">
                <div class="input-group input-group-sm" style="width: 150px;">
                    <input type="text" name="table_search" class="form-control pull-right search-input" placeholder="" v-model = "searchVal">

                    <div class="input-group-btn">
                        <button type="submit" class="btn btn-default search-btn" @click = "send"><i class="fa fa-search"></i></button>
                    </div>
                </div>
            </div>
        </label>
    </div>
</template>
<style>

</style>
<script>
  export default {
    data() {
      return {
        searchVal : ""
      }
    },
    methods:{
        send() {
            this.$emit('search',this.searchVal);
        }
    }
  }
</script>
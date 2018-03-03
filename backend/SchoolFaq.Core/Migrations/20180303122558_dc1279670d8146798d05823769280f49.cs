using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace SchoolFaq.Core.Migrations
{
    public partial class dc1279670d8146798d05823769280f49 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "CategoryId",
                table: "FaqQuestions",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.AddColumn<string>(
                name: "Subject",
                table: "FaqQuestions",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FaqQuestions_CategoryId",
                table: "FaqQuestions",
                column: "CategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_FaqQuestions_Categories_CategoryId",
                table: "FaqQuestions",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FaqQuestions_Categories_CategoryId",
                table: "FaqQuestions");

            migrationBuilder.DropTable(
                name: "Categories");

            migrationBuilder.DropIndex(
                name: "IX_FaqQuestions_CategoryId",
                table: "FaqQuestions");

            migrationBuilder.DropColumn(
                name: "CategoryId",
                table: "FaqQuestions");

            migrationBuilder.DropColumn(
                name: "Subject",
                table: "FaqQuestions");
        }
    }
}

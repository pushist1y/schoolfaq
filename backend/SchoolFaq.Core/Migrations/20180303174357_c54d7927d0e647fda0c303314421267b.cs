using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace SchoolFaq.Core.Migrations
{
    public partial class c54d7927d0e647fda0c303314421267b : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Answer",
                table: "FaqQuestions",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "AnswerDate",
                table: "FaqQuestions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AnswererName",
                table: "FaqQuestions",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Answer",
                table: "FaqQuestions");

            migrationBuilder.DropColumn(
                name: "AnswerDate",
                table: "FaqQuestions");

            migrationBuilder.DropColumn(
                name: "AnswererName",
                table: "FaqQuestions");
        }
    }
}
